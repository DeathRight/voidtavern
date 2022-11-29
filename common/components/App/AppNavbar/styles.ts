import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navbar: {
    top: 0,
    [theme.fn.smallerThan('sm')]: { width: '85%', height: '100%' },
  },
}));

export default useStyles;
