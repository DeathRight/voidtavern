import { Burger } from '@mantine/core';
import { useAppContext } from './AppContext';
import useStyles from './styles';

const BurgerButton = () => {
  const { classes } = useStyles();
  const { onNavBarToggle, navbarOpened } = useAppContext();
  return (
    <Burger
      aria-label="Side Menu Toggle"
      className={classes.btn}
      opened={navbarOpened}
      onClick={onNavBarToggle}
      hidden={navbarOpened}
    />
  );
};

export default BurgerButton;
