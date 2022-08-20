import { useContext, useRef } from 'react';
import { STGContext, ISTGContext } from './context';
import { useScrollPosition } from './useScrollPosition';

export type SectionProps = { children: React.ReactNode; id: string };
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
        innerRef.current = e ?? undefined;
        if (e) saveRef(e, id);
      }}
      key={id}
    >
      {children}
    </div>
  );
};

export default Section;
