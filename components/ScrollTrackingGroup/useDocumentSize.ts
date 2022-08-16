import { useEffect, useState } from 'react';
import { Size } from './context';

const getBodyAndElementDim = (key: keyof typeof document.body) => {
  const b = document.body;
  const e = document.documentElement;

  return [b[key] as number, e[key] as number] as const;
};
const getBED = getBodyAndElementDim;

// https://javascript.info/size-and-scroll-window
const getDimensions = () => {
  const width = Math.max(
    ...getBED('scrollWidth'),
    ...getBED('offsetWidth'),
    ...getBED('clientWidth')
  );
  const height = Math.max(
    ...getBED('scrollHeight'),
    ...getBED('offsetHeight'),
    ...getBED('clientHeight')
  );
  return { width, height } as Size;
};

const useDocumentSize = () => {
  const [dims, setDims] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => setDims(getDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dims;
};

export default useDocumentSize;
