import { Box, BoxProps } from '@mantine/core';
import useStyle from './styles';
import HeaderSpacers from '../HeaderSpacers';

const PageHeader = (props: Omit<BoxProps, 'className'>) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();

  return (
    <Box className={classes.main} id="pageTop" {...spread}>
      <HeaderSpacers />
      {children}
      <HeaderSpacers />
    </Box>
  );
};

export default PageHeader;
