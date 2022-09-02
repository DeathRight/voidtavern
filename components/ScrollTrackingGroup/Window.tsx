import { useId, useContext, useMemo, CSSProperties } from 'react';
import { STGContext, ISTGContext } from './context';

export type WindowProps = {
  /**
   * `CSS position string` that the Window's position will be offset from the
   * orientation-based side of the STG
   *
   * The side is `top/left` for `vertical/horizontal` orientation respectively,
   * and `bottom/right` respectively if `flipped`.
   *
   * Default: '0'
   */
  offset?: string;
  /**
   * `CSS size string` that the Window's axis will use.
   *
   * The axis is `height` if orientation is `vertical`,
   * or `width` if orientation is `horizontal`.
   *
   * Note: The cross-axis size will always be '100%'.
   *
   * Default: '5(vw/vh)'
   */
  size?: string;
  id?: string;
};
type WindowSide = 'top' | 'bottom' | 'left' | 'right';
const Window = (props: WindowProps) => {
  const { offset = '0', size, id } = props;
  const uId = useId();
  const key = id ?? uId;
  //const innerRef = useRef<HTMLDivElement | undefined | null>(null);

  const { orientation, flipped, saveRef } = useContext(STGContext) as ISTGContext;
  const side: WindowSide = useMemo(() => {
    let s: WindowSide = orientation === 'vertical' ? 'top' : 'left';
    if (flipped) s = s === 'top' ? 'bottom' : 'right';

    return s;
  }, [orientation, flipped]);

  const StickyWindow = useMemo(() => {
    const s: CSSProperties = {
      position: 'sticky',
      visibility: 'hidden',
    };
    s[side] = offset;

    if (side === 'top' || side === 'bottom') {
      // Vertical orientation
      s.width = '100%';
      s.height = size ?? '15vh';
    } else {
      // Horizontal orientation
      s.height = '100%';
      s.width = size ?? '15vw';
    }

    return (
      <div
        key={key}
        ref={(e) => {
          if (e) saveRef(e, 'STG.Window');
        }}
        style={s}
      />
    );
  }, [side, size, offset]);

  const flexD = `${orientation === 'vertical' ? 'column' : 'row'}${flipped ? '-reverse' : ''}`;

  return (
    <div
      key={`${key}.Container`}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        visibility: 'hidden',
        display: 'flex',
        flexDirection: flexD as any,
      }}
    >
      {StickyWindow}
    </div>
  );
};

export default Window;
