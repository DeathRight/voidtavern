import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  title: {
    //color: theme.colorScheme === 'dark' ? theme.colors.gray['6'] : theme.black,
    //fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    fontFamily: 'Megrim, cursive',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.headings.sizes.h2.fontSize,
    },
  },
  firstLetter: {
    color: theme.primaryColor,
    fontFamily: 'Cinzel Decorative, cursive',
    fontSize: '1.25em',
    position: 'relative',
    top: '-0.25em',
    marginBottom: '-1em',
  },
  desc: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));

export default useStyle;
