/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
  },
  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  /* --------------------------------- Buttons -------------------------------- */
  btn: {
    pointerEvents: 'auto',
  },
  /* ------------------------------------ * ----------------------------------- */
  navbar: {
    top: 0,
    //[theme.fn.smallerThan('sm')]: { width: '85%', height: '100%' },
  },
}));

export default useStyles;
