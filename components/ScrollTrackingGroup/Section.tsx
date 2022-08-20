import { useContext, useMemo, useRef } from 'react';
import { STGContext, ISTGContext } from './context';
import { useScrollPosition } from './useScrollPosition';

export type SectionProps = { children: React.ReactNode; id: string };
const Section = (props: SectionProps) => {
  const { children, id } = props;

  const { saveRef, container, sections, lastUpdated, localScroll } = useContext(
    STGContext
  ) as ISTGContext;
  const innerRef = useRef<HTMLElement | undefined>();
  /* ---------------------------- Position Tracking --------------------------- */
  useScrollPosition(
    ({ currPos }) => {
      if (sections.current[id]) sections.current[id]!.position = currPos;
    },
    [lastUpdated],
    innerRef,
    undefined,
    undefined,
    localScroll ? container : undefined
  );
  /* --------------------------------- Render --------------------------------- */
  const section = useMemo(
    () => (
      <div
        ref={(e) => {
          innerRef.current = e ?? undefined;
          if (e) saveRef(e, id);
        }}
        key={id}
      >
        {children}
      </div>
    ),
    [children, innerRef]
  );
  return <>{section}</>;
};

export default Section;
