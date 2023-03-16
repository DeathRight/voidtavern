import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 1,
    pointerEvents: 'auto',
  },
  btn: {
    pointerEvents: 'auto',
    marginTop: 'auto',
    display: 'flex',
    overflow: 'auto',
    justifySelf: 'center',
  },
  tabs: {
    overflowY: 'visible',
  },
  tabLabel: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  tabIcon: {
    [theme.fn.smallerThan('xs')]: {
      // By default has margin-right 7px
      margin: '0 !important',
    },
  },
}));

export default useStyle;
