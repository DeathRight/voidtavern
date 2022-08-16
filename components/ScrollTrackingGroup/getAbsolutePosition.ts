/**
 * Converts `viewport` coordinates (getBoundingClientRect) to `document` (absolute) coordinates
 */
const getAbsolutePosition = (coords: { x: number; y: number }) => {
  const { x, y } = coords;
  const w = window;
  return { x: x + w.scrollX, y: y + w.scrollY };
};

export default getAbsolutePosition;
