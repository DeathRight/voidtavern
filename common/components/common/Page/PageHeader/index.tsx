import { Box, BoxProps } from '@mantine/core';
import useStyle from './styles';

const PageHeader = (props: Omit<BoxProps, 'className'>) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();

  return (
    <Box className={classes.main} id="pageTop" {...spread}>
      <div className={classes.container}>
        <div className={classes.spacer} />
        {children}
      </div>
    </Box>
  );
};

export default PageHeader;
