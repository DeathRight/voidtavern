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
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
}));

export default useStyle;
