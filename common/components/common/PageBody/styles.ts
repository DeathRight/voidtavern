import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    paddingTop: theme.spacing.sm,
    width: 'calc(100% - 260px)',
    maxWidth: '820px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default useStyle;