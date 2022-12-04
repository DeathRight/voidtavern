import { BoxProps, Box } from '@mantine/core';
import PageContent from '../PageContent';
import usePageStyles from '../styles';

const PageHeading = (props: BoxProps) => {
  const { children, sx: _sx, ...spread } = props;
  const { classes } = usePageStyles();

  const defSx: typeof _sx = () => ({
    width: '100%',
    paddingTop: '48px',
  });

  return (
    <Box className={classes.top}>
      <PageContent>
        <Box sx={_sx ?? defSx} {...spread}>
          {children}
        </Box>
      </PageContent>
    </Box>
  );
};

export default PageHeading;
