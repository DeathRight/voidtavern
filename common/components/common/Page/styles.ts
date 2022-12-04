import { createStyles } from '@mantine/core';

const usePageStyles = createStyles((theme) => ({
  top: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    width: 'calc(100% + 16px + 16px)',
    marginLeft: '-16px',
  },
}));

export default usePageStyles;
