import { useState, useLayoutEffect } from 'react';
import theme from '../theme';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      function updateSize() {
        const height = window.innerHeight;
        const width = window.innerWidth;
        setSize([width, height]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  }
  return size;
};

export const useIsMobile = () => {
  const [width] = useWindowSize();
  return width < theme.SIZE.desktop;
};
