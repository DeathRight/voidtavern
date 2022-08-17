import { createContext, Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import { IPosition } from './useScrollPosition/useScrollPosition';

export type Coordinates = { x: number; y: number };
export type Size = { width: number; height: number };

export type Orientation = 'vertical' | 'horizontal';

export type SectionObj = { element: HTMLDivElement; position: IPosition; size: Size };
export type SectionsObj = { [k: string]: SectionObj | undefined | null };

export interface ISTGContext {
  sections: React.MutableRefObject<SectionsObj>;
  window: React.MutableRefObject<SectionObj | undefined | null>;
  saveRef: (e: HTMLDivElement | null, key: string) => void;
  lastUpdated: number;
  setLastUpdated: Dispatch<SetStateAction<number>>;
  flipped: boolean;
  orientation: Orientation;
}

export const STGContext = createContext<ISTGContext | null>(null);

const STGContextProvider = (props: {
  children: React.ReactNode;
  flipped?: boolean;
  orientation?: Orientation;
}) => {
  const { children, flipped = false, orientation = 'vertical' } = props;

  const window = useRef<SectionObj | undefined | null>(null);
  const sections = useRef<SectionsObj>({});
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const saveRef = useCallback(
    (e: HTMLDivElement | null, key: string) => {
      if (e) {
        const coords = e.getBoundingClientRect();

        const section: SectionObj = {
          element: e,
          position: {
            x: coords.x,
            left: coords.left,
            y: coords.y,
            top: coords.top,
            right: coords.right,
            bottom: coords.right,
          },
          size: { width: coords.width, height: coords.height },
        };
        if (key === 'STG.Window') window.current = section;
        else sections.current[key] = section;
      } else if (!e && sections.current[key]) delete sections.current[key];
      setLastUpdated(Date.now());
    },
    [sections]
  );

  return (
    <STGContext.Provider
      value={{ window, sections, saveRef, lastUpdated, setLastUpdated, flipped, orientation }}
    >
      {children}
    </STGContext.Provider>
  );
};

export default STGContextProvider;
