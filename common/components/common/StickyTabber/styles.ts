import { createStyles } from '@mantine/core';

const useStyle = createStyles(() => ({
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
}));

export default useStyle;
