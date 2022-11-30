import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray['6'] : theme.black,
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    flexDirection: 'row',
    userSelect: 'none',

    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 75,
    },
    [theme.fn.smallerThan(390)]: {
      fontSize: 60,
    },
    [theme.fn.smallerThan(340)]: {
      fontSize: 55,
    },
  },
  void: {
    color: theme.primaryColor,
    fontFamily: 'Cinzel Decorative, cursive',
  },
  tavern: {
    fontFamily: 'Megrim, cursive',
  },
  welcome: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray['7'] : theme.colors.gray['5'],
    letterSpacing: 14,
    userSelect: 'none',
    [theme.fn.smallerThan('xs')]: {
      marginTop: 12,
      fontSize: 22.6,
      letterSpacing: 11.5,
    },
    [theme.fn.smallerThan(390)]: {
      marginTop: 12,
      fontSize: 14,
      letterSpacing: 11,
    },
    [theme.fn.smallerThan(340)]: {
      marginTop: 10,
      fontSize: 12,
      letterSpacing: 10,
    },
  },
}));

export default useStyle;
