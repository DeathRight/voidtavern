import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    paddingTop: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    width: 'calc(100% - 260px)',
    maxWidth: '820px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.fn.smallerThan('lg')]: {
      width: '100%',
    },
  },
}));

export default useStyle;
