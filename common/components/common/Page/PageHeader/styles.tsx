import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    position: 'sticky',
    top: 0,
    height: 50,
    zIndex: 50,
    pointerEvents: 'none',
    alignSelf: 'flex-start',
    borderBottomWidth: theme.radius.xs,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',

    paddingRight: 'calc(34px + 10px)',
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: 'calc(34px + 10px)',
    },
  },
  sticky: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
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
