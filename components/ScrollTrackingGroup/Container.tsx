import React, { useContext, useRef, useImperativeHandle, useEffect, useState } from 'react';
import STGContextProvider, { STGContext, ISTGContext, SectionObj } from './context';
import { SectionProps } from './Section';
import { useScrollPosition } from './useScrollPosition';

export type ContainerProps = {
  children: React.ReactNode;
  /**
   * Fires when the currently 'scrolled to' section changes elements
   */
  onScrolledToChange?: (id: string, e: HTMLElement) => void;
  /**
   * Whether we are tracking vertical or horizontal scrolling.
   *
   * Default: `vertical`
   *
   * When vertical, offset is from the top. When horizontal, offset is from the left.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Default: `false`
   *
   * If true, offset is from the opposite (bottom or right) side of the viewport.
   *
   * Normally, the element closest to the top of the section window is the currently 'scrolled to' element,
   *      however, if flipped, the element closest to the bottom is.
   */
  flipped?: boolean;
  /**
   * Default: `false`
   *
   * If true, we track viewport from this component instead of document.
   * Should only be used if the component itself is scrolling locally.
   */
  localScroll?: boolean;
  id?: string;
};

type Line = { start: number; end: number };
/**
 * Checks if `window` line overlaps with `object` line
 */
const doesOverlap = (window: Line, object: Line) =>
  window.start <= object.end && object.start <= window.end;

const STGComponent = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const {
    children,
    onScrolledToChange,
    orientation = 'vertical',
    flipped = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    localScroll = false,
    id: _id,
  } = props;
  // TODO: Implement localScroll
  // TODO: Implement sticky window div to use pos of in place of offsets
  const { window, sections, saveRef, lastUpdated } = useContext(STGContext) as ISTGContext;

  /* ------------------------- Internal ref forwarding ------------------------ */
  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

  /* --------------------------- Children useEffect --------------------------- */
  useEffect(() => {
    const cObj = {} as { [k: string]: number | undefined | null };
    React.Children.forEach(children, (c) => {
      const child = c as React.ReactElement<SectionProps>;
      cObj[child.props.id] = 1;
    });

    // If child is removed, remove the ref
    const sObj = sections.current;
    if (sObj) {
      Object.keys(sObj).forEach((k) => {
        if (!cObj[k]) saveRef(null, k);
      });
    }
  }, [children]);

  /* -------------------------------------------------------------------------- */
  /*                          Scroll Tracking Behavior                          */
  /* -------------------------------------------------------------------------- */
  /* ---------------------- Currently Scrolled To Effect ---------------------- */
  const [scrolledTo, setScrolledTo] =
    useState<Parameters<NonNullable<typeof onScrolledToChange>>>();

  useEffect(() => {
    if (scrolledTo && onScrolledToChange) onScrolledToChange(...scrolledTo);
  }, [scrolledTo]);

  /* ----------------------------- Scroll Tracking ---------------------------- */
  useScrollPosition(() => {
    if (sections.current && window.current) {
      const axis = orientation === 'vertical' ? 'y' : 'x';
      const axisEnd = orientation === 'vertical' ? 'bottom' : 'right';
      const s = sections.current;
      let topMost: (SectionObj & { id: string }) | undefined;

      const wRect = window.current.element.getBoundingClientRect();
      const offset = {
        top: orientation === 'vertical' ? wRect.top : wRect.left,
        btm: orientation === 'vertical' ? wRect.bottom : wRect.right,
      }; //{ top: topOffset, btm: btmOffset };
      Object.entries(s).forEach(([id, section]) => {
        if (section) {
          const pos = section.position;

          if (
            doesOverlap(
              { start: offset.top, end: offset.btm },
              { start: pos[axis], end: pos[axisEnd] }
            )
          ) {
            // If this section's position is further up the page than current topMost section
            // or if topMost hasn't been set, set this section as topMost.
            if (
              (topMost &&
                (!flipped
                  ? pos[axis] < topMost.position[axis]
                  : pos[axis] > topMost.position[axis])) ||
              !topMost
            ) {
              topMost = { id, ...section };
            }
          }
        }
      });

      if (topMost) setScrolledTo([topMost.id, topMost.element]);
    }
  }, [window, flipped, orientation, lastUpdated]);
  /* ------------------------------------ * ----------------------------------- */
  /* --------------------------------- Render --------------------------------- */
  return (
    <div style={{ position: 'relative' }} key={`${_id}.Container`}>
      <div key={_id} ref={innerRef}>
        {children}
      </div>
    </div>
  );
});

// Wrap STG component in STGContextProvider
const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, ...spread } = props;

  return (
    <STGContextProvider flipped={props.flipped} orientation={props.orientation}>
      <STGComponent ref={ref} {...spread}>
        {children}
      </STGComponent>
    </STGContextProvider>
  );
});

export default Container;
