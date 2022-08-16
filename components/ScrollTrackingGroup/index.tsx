import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import STGContextProvider, { ISTGContext, SectionObj, STGContext } from './context';
import useDocumentSize from './useDocumentSize';
import { useScrollPosition } from './useScrollPosition';
//import { useElementSize } from './useElementSize';

type SectionProps = { children: React.ReactNode; id: string };
const Section = (props: SectionProps) => {
  const { children, id } = props;

  const { saveRef, sections, lastUpdated } = useContext(STGContext) as ISTGContext;
  const innerRef = useRef<HTMLElement | undefined>();
  /* ------------------------------ Size Tracking ----------------------------- */
  /*const { width, height, ref: sizeRef } = useElementSize<HTMLDivElement>();
  useEffect(() => {
    // Only track size if flipped, because that is the only time we'd use it
    if (flipped) {
      if (sections.current[id]) {
        sections.current[id]!.size = { width: width ?? 0, height: height || 0 };
      }
    }
  }, [width, height, flipped]);*/
  /* ---------------------------- Position Tracking --------------------------- */
  useScrollPosition(
    ({ currPos }) => {
      // Set to viewport coords, not viewport
      if (sections.current[id]) sections.current[id]!.position = currPos;
    },
    [lastUpdated],
    innerRef
  );
  // TODO: Add localScroll behavior
  /* --------------------------------- Render --------------------------------- */
  return (
    <div
      ref={(e) => {
        //if (flipped) sizeRef.current = e;
        if (e) saveRef(e, id);
      }}
      key={id}
    >
      {children}
    </div>
  );
};

type ScrollTrackingGroupProps = {
  children: React.ReactNode;
  /**
   * Fires when the currently 'scrolled to' section changes elements
   */
  onScrolledToChange?: (id: string, e: HTMLElement) => void;
  /**
   * Offset in pixels from the top of the viewport the section window should start.
   *
   * Default: `0`
   *
   * **Ex:**
   *
   * topOffset = 0, btmOffset = 100 -> Will switch current element when it enters (scrolls to)
   *      0-100px from the top of the viewport.
   */
  topOffset?: number;
  /**
   * Offset in pixels from the top of the viewport the section window should end.
   *
   * Default: `100`
   *
   * **Ex:**
   *
   * `topOffset = 0, btmOffset = 100` -> Will switch current element when it enters (scrolls to)
   *      0-100px from the top of the viewport.
   */
  btmOffset?: number;
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
};

type Line = { start: number; end: number };
/**
 * Checks if `window` line overlaps with `object` line
 */
const doesOverlap = (window: Line, object: Line) =>
  window.start <= object.end && object.start <= window.end;

const STG = React.forwardRef<HTMLDivElement, ScrollTrackingGroupProps>((props, ref) => {
  const {
    children,
    onScrolledToChange,
    topOffset = 0,
    btmOffset = 100,
    orientation = 'vertical',
    flipped = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    localScroll = false,
  } = props;
  // TODO: Implement localScroll
  // TODO: Implement sticky window div to use pos of in place of offsets
  const { sections, saveRef } = useContext(STGContext) as ISTGContext;

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
  const scrollDims = useDocumentSize();
  useScrollPosition(() => {
    if (sections.current) {
      const axis = orientation === 'vertical' ? 'y' : 'x';
      const axisEnd = orientation === 'vertical' ? 'bottom' : 'right';
      const s = sections.current;
      let topMost: (SectionObj & { id: string }) | undefined;
      Object.entries(s).forEach(([id, section]) => {
        if (section) {
          const pos = section.position;
          let offset = { top: topOffset, btm: btmOffset };

          // If flipped we have to reverse offsets and
          // subtract them from the scroll dimension.
          if (flipped) {
            const dim = axis === 'y' ? scrollDims.height : scrollDims.width;
            offset = { top: dim - btmOffset, btm: dim - topOffset };
          }

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
  }, [flipped, topOffset, btmOffset, orientation, scrollDims]);
  /* ------------------------------------ * ----------------------------------- */
  /* --------------------------------- Render --------------------------------- */
  return <div ref={innerRef}>{children}</div>;
});

// Wrap STG component in STGContextProvider
const STGWithContext = React.forwardRef<HTMLDivElement, ScrollTrackingGroupProps>((props, ref) => {
  const { children, ...spread } = props;

  return (
    <STGContextProvider flipped={props.flipped} orientation={props.orientation}>
      <STG ref={ref} {...spread}>
        {children}
      </STG>
    </STGContextProvider>
  );
});

/* ---------------------------- Exports & Typing ---------------------------- */
// Mimic React's subcomponent architecture for exporting
// so we can use both <ScrollTrackingGroup>
// and <ScrollTrackingGroup.Section>
type ScrollTrackingGroupComponent = typeof STGWithContext & { Section: typeof Section };

/**
 * Tracks a group of `Sections` (divs) so that when a `Section` is scrolled into a `window` defined by two `offsets`
 *      it is seen as the current Section and fires `onScrolledToChange`.
 */
const ScrollTrackingGroup = { ...STGWithContext, Section } as ScrollTrackingGroupComponent;

export default ScrollTrackingGroup;
