import { Box, BoxProps } from '@mantine/core';
import React from 'react';
import useStyle from './styles';

const PageBody = (props: BoxProps) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();

  return (
    <Box className={classes.main} {...spread}>
      {children}
    </Box>
  );
};

export default PageBody;
