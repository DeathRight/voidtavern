import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    position: 'sticky',
    top: -2,
    height: 50,
    zIndex: 50,
    pointerEvents: 'none',
    alignSelf: 'flex-start',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    //paddingRight: 'calc(34px + 34px + 24px)',

    width: 'calc(100% + 16px + 16px)',
    marginLeft: '-16px',
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: 'calc(34px + 34px + 24px)',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: 'calc(100% - 16px - 16px)',
  },
  spacer: {
    flexBasis: 'calc(34px + 34px + 24px)',
    order: 0,
    flexGrow: 0,
    flexShrink: 10,
  },
}));

export default useStyle;
