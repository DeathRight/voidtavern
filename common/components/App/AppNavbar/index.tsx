import { Navbar, ScrollArea, NavLink, Drawer, Group, Box, CloseButton, Text } from '@mantine/core';
import { IconHome } from '@tabler/icons';
import Link from 'next/link';
import { useMemo } from 'react';
import Projects from '../../../utils/Projects';
import { useAppContext } from '../AppContext';
import RTLButton from '../RTLButton';
import useStyles from '../styles';

interface AppNavbarProps {
  active: string;
  navClicked: (id: string) => void;
}

const Content = (props: AppNavbarProps) => {
  const { active, navClicked } = props;
  const { classes } = useStyles();
  const { onNavBarToggle, isDrawer } = useAppContext();

  const navItems = useMemo(
    () =>
      Projects.map((p) => (
        <Link key={p.id} href={`/project/${p.id}`} passHref>
          <NavLink
            component="a"
            className={classes.navLink}
            active={p.id === active}
            label={p.name}
            onClick={() => navClicked(p.id)}
          />
        </Link>
      )),
    [active]
  );

  const SideMenuContent = useMemo(
    () => (
      <>
        <Box className={classes.navContainer}>
          <Navbar.Section>
            <Group position="right" pl="sm" pr="md">
              <CloseButton className={classes.navCloseBtn} mr="auto" onClick={onNavBarToggle} />
              <RTLButton />
            </Group>
          </Navbar.Section>
        </Box>
        <ScrollArea>
          <Box className={classes.navContainer}>
            <Navbar.Section pb="lg">
              <Link key="home" href="/" passHref>
                <NavLink
                  key="homeBtn"
                  label={<Text size="lg">Home</Text>}
                  active={active === 'home'}
                  onClick={() => navClicked('home')}
                  icon={<IconHome />}
                />
              </Link>
            </Navbar.Section>
            <Navbar.Section>{navItems}</Navbar.Section>
          </Box>
        </ScrollArea>
      </>
    ),
    [active]
  );

  return <Box className={isDrawer ? undefined : classes.navBase}>{SideMenuContent}</Box>;
};

export const AppNavbarDrawer = (props: AppNavbarProps) => {
  const { active, navClicked } = props;
  const { navbarOpened, onNavBarToggle, isDrawer } = useAppContext();
  const { classes } = useStyles();

  return (
    <Drawer
      className={classes.navdrawer}
      withCloseButton={false}
      opened={navbarOpened && isDrawer}
      onClose={onNavBarToggle}
      hidden={!isDrawer}
    >
      <Content active={active} navClicked={navClicked} />
    </Drawer>
  );
};

const AppNavbar = (props: AppNavbarProps) => {
  const { active, navClicked } = props;
  const { classes } = useStyles();

  return (
    <Navbar
      className={classes.navbar}
      hiddenBreakpoint="sm"
      hidden
      width={{ sm: 200, lg: 300 }}
      height="calc(100vh - var(--mantine-footer-height, 0px))"
    >
      <Content active={active} navClicked={navClicked} />
    </Navbar>
  );
};

export default AppNavbar;
