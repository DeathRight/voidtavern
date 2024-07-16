import { Footer } from '@mantine/core';
import useStyle from './styles';

const PageFooter = () => {
  const { classes } = useStyle();

  return (
    <Footer className={classes.main} height="50px">
      Test
    </Footer>
  );
};

export default PageFooter;
