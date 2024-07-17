import { Box, BoxProps } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import usePageStyles from '../styles';
import useStyle from './styles';

const PageHeader = (props: Omit<BoxProps, 'className'>) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();
  const { classes: pClasses } = usePageStyles();
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), {
      threshold: [1],
      rootMargin: '-1px 0px 0px 0px',
    });

    observer.observe(header);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(header);
    };
  }, []);

  return (
    <Box
      ref={headerRef}
      className={`${classes.main} ${pClasses.top} ${isSticky ? classes.sticky : ''}`}
      id="pageTop"
      {...spread}
    >
      <div className={classes.container}>
        <div className={classes.spacer} />
        {children}
      </div>
    </Box>
  );
};

export default PageHeader;
