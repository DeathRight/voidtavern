import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  textStack: {
    [theme.fn.smallerThan(700)]: {
      marginLeft: '64px',
      marginRight: '64px',
    },
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray['6'] : theme.black,
    //fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    fontFamily: 'Megrim, cursive',
    display: 'inline-flex',
    flexDirection: 'row',
    marginBottom: '-0.5em',

    [theme.fn.smallerThan(800)]: {
      fontSize: theme.headings.sizes.h2.fontSize,
    },
  },
  firstLetter: {
    color: theme.primaryColor,
    fontFamily: 'Cinzel Decorative, cursive',
    fontSize: '1.25em',
    position: 'relative',
    bottom: '0.225em',
  },
  restL: {
    fontFamily: 'inherit',
  },
  desc: {
    //color: theme.colorScheme === 'dark' ? theme.colors.gray['7'] : theme.colors.gray['5'],
    [theme.fn.smallerThan(800)]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));

export default useStyle;
