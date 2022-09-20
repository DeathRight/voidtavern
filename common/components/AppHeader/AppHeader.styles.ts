import { createStyles } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default createStyles((theme) => ({
  header: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
  },
  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    pointerEvents: 'auto',
  },
}));
