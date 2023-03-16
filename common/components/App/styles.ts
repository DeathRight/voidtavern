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
  /* ----------------------------------- Nav ---------------------------------- */
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
    display: 'flex',
    textDecoration: 'none',
  },
  navSectionActive: {
    width: '4px',
    alignSelf: 'stretch',
    backgroundColor: theme.colors[theme.primaryColor],
  },

  navBase: {
    width: 'calc(100% + 1px)',
    height: '100%',

    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    borderStyle: 'hidden',
    borderWidth: '0px',

    borderRightStyle: 'solid',
    borderRightWidth: theme.radius.xs,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    //borderTopRightRadius: theme.spacing.md,
    //boxShadow: '0px 0px 14px -10px black',

    textDecoration: 'none',
  },
  navContainer: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
    width: '100%',
  },
  /* ------------------------------------ * ----------------------------------- */
}));

export default useStyles;
