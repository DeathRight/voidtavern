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
    padding: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    border: 'none',
  },
  navCloseBtn: {
    [theme.fn.largerThan('sm')]: {
      display: 'none !important',
    },
  },
  navdrawer: {
    padding: 0,
  },
  navLink: {
    //borderRadius: theme.radius.md,
  },
  navBase: {
    width: 'calc(100% + 1px)',
    height: '100%',

    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    borderTopRightRadius: '14px',
    boxShadow: '0px 0px 14px -10px black',
  },
  navContainer: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    width: '100%',
  },
}));

export default useStyles;
