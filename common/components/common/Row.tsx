import { Box, BoxProps } from '@mantine/core';
import React from 'react';

const Row = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, sx, ...spread } = props;
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        ...sx,
      }}
      {...spread}
    >
      {children}
    </Box>
  );
});

export default Row;
