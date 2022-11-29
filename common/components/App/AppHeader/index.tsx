import { Box, Group, Header, MediaQuery } from '@mantine/core';
import BurgerButton from '../BurgerButton';
import useStyles from '../styles';
import ThemeButton from '../ThemeButton';

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Header height={48} p="xs" className={classes.header}>
      <Box className={classes.box}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Group spacing="xs" position="left" align="center">
            <BurgerButton />
          </Group>
        </MediaQuery>
        <Group spacing="xs" position="right" align="center" ml="auto">
          <ThemeButton />
        </Group>
      </Box>
    </Header>
  );
};

export default AppHeader;
