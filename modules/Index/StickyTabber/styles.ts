import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    position: 'sticky',
    top: -2,
    alignSelf: 'flex-start',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: 50,
    pointerEvents: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    flexWrap: 'nowrap',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    minWidth: '100%',
    overflow: 'auto',
    zIndex: 50,
  },
  btn: {
    pointerEvents: 'auto',
    marginTop: 'auto',
    display: 'flex',
    overflow: 'auto',
    justifySelf: 'center',
  },
}));

export default useStyle;
