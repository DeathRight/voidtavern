import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  main: {
    position: 'sticky',
    top: -2,
    alignSelf: 'flex-start',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: 50,
    pointerEvents: 'none',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    flexWrap: 'nowrap',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: '100%',
    overflow: 'auto',
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
