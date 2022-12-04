import { Box, BoxProps } from '@mantine/core';
import usePageStyles from '../styles';
import useStyle from './styles';

const PageHeader = (props: Omit<BoxProps, 'className'>) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();
  const { classes: pClasses } = usePageStyles();

  return (
    <Box className={`${classes.main} ${pClasses.top}`} id="pageTop" {...spread}>
      <div className={classes.container}>
        <div className={classes.spacer} />
        {children}
      </div>
    </Box>
  );
};

export default PageHeader;
