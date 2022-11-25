import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  closeBtn: {
    marginLeft: 'auto',
    ':hover': { color: theme.colors.warning },
  },
  backBtn: {
    minWidth: '0',
    maxWidth: '44px',
    transition: 'max-width 250ms ease-out',
  },
  collapsed: {
    maxWidth: '0px',
    pointerEvents: 'none',
  },
}));

export default useStyle;
