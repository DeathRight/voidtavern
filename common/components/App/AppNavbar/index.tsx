import {
  Navbar,
  ScrollArea,
  NavLink,
  useMantineTheme,
  Drawer,
  ActionIcon,
  Group,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
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

  const navItems = useMemo(
    () =>
      Projects.map((p) => (
        <Link key={p.id} href={`/project/${p.id}`} passHref>
          <NavLink
            component="a"
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
      <ScrollArea>
        <Group position="center">
          <Link key="home" href="/" passHref>
            <ActionIcon
              component="a"
              key="homeBtn"
              aria-label="Home"
              onClick={() => navClicked('home')}
            >
              <IconHome />
            </ActionIcon>
          </Link>
          <RTLButton />
        </Group>
        {navItems}
      </ScrollArea>
    ),
    [active]
  );

  return <>{SideMenuContent}</>;
};

export const AppNavbarDrawer = (props: AppNavbarProps) => {
  const { active, navClicked } = props;
  const { navbarOpened, onNavBarToggle } = useAppContext();

  const theme = useMantineTheme();
  const isDrawer = useMediaQuery(theme.fn.smallerThan('sm').substring(7), false);

  return (
    <Drawer
      closeButtonLabel="Close Side Menu"
      padding="md"
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
      p="md"
      hiddenBreakpoint="sm"
      hidden
      width={{ sm: 200, lg: 300 }}
    >
      <Content active={active} navClicked={navClicked} />
    </Navbar>
  );
};

export default AppNavbar;
