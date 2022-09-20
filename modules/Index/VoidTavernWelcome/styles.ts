import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray['6'] : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    userSelect: 'none',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 50,
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

    [theme.fn.smallerThan('sm')]: {
      marginTop: 8,
      fontSize: 14,
      letterSpacing: 8,
    },
  },
}));

export default useStyle;
