import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    position: 'relative',
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(100% - 16px - 16px)',
  },
  spacer: {
    flexGrow: 0,
    flexShrink: 10,
    [theme.fn.largerThan('sm')]: {
      flexBasis: 'calc(34px + 10px)',
    },
  },
}));

export default useStyle;
