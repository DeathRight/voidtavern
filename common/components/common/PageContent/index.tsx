import { Box, BoxProps } from '@mantine/core';
import useStyle from './styles';

interface PageContentProps extends BoxProps {}

const PageContent = (props: PageContentProps) => {
  const { children, ...spread } = props;
  const { classes } = useStyle();

  return (
    <Box className={classes.main} {...spread}>
      {children}
    </Box>
  );
};

export default PageContent;
