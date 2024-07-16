import {
  Navbar,
  ScrollArea,
  NavLink,
  Drawer,
  Group,
  Box,
  CloseButton,
  Text,
  Divider,
} from '@mantine/core';
import { IconHome } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('common');

  const navItems = useMemo(
    () =>
      Projects.map((p) => (
        <Link className={classes.navLink} key={p.id} href={`/project/${p.id}`} passHref>
          <Box className={classes.navLink} component="a">
            <Box
              className={classes.navSectionActive}
              sx={{ visibility: active === p.id ? 'unset' : 'hidden' }}
            />
            <NavLink
              component="a"
              active={p.id === active}
              label={p.name}
              onClick={() => navClicked(p.id)}
            />
          </Box>
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
            <Navbar.Section>
              <Link key="home" href="/" passHref>
                <Box className={classes.navLink} component="a">
                  <Box
                    className={classes.navSectionActive}
                    sx={{ visibility: active === 'home' ? 'unset' : 'hidden' }}
                  />
                  <NavLink
                    key="homeBtn"
                    label={<Text size="lg">{t('header.tooltips.home')}</Text>}
                    active={active === 'home'}
                    onClick={() => navClicked('home')}
                    icon={<IconHome />}
                  />
                </Box>
              </Link>
            </Navbar.Section>
            <Navbar.Section>
              <Divider />
            </Navbar.Section>
            <Navbar.Section pl="lg" pt="xl" pb="xs">
              <Text size="md" color="dimmed" sx={{ userSelect: 'none' }}>
                {t('skills.Projects')}
              </Text>
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
    <Navbar className={classes.navbar} hiddenBreakpoint="sm" hidden width={{ sm: 200, lg: 300 }}>
      <Content active={active} navClicked={navClicked} />
    </Navbar>
  );
};

export default AppNavbar;
