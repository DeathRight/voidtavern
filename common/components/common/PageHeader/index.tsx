import { Box, BoxProps } from '@mantine/core';
import useStyle from './styles';
import HeaderSpacers from '../HeaderSpacers';

const PageHeader = (props: Omit<BoxProps, 'className'>) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();

  return (
    <Box className={classes.main} id="pageTop" {...spread}>
      <div className={classes.container}>
        <div className={classes.spacer} />
        {children}
        <div style={{ order: 2 }}>
          <HeaderSpacers />
        </div>
      </div>
    </Box>
  );
};

export default PageHeader;
