import { BoxProps, Box } from '@mantine/core';

const PageHeading = (props: BoxProps) => {
  const { children, sx: _sx, ...spread } = props;

  const defSx: typeof _sx = () => ({
    //backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    width: '100%',
    paddingTop: '48px',
    overflow: 'hidden',
  });

  return (
    <Box sx={_sx ?? defSx} {...spread}>
      {children}
    </Box>
  );
};

export default PageHeading;
