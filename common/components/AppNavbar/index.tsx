import { Navbar, ScrollArea, NavLink, useMantineTheme, Transition } from '@mantine/core';
import { useClickOutside, useFocusTrap, useMediaQuery, useMergedRef } from '@mantine/hooks';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Projects from '../../utils/Projects';
import useStyles from './styles';

interface AppNavbarProps {
  hidden?: boolean;
  setHidden: (b: boolean) => void;
  active: string;
  navClicked: (id: string) => void;
}

const AppNavbar = (props: AppNavbarProps) => {
  const { hidden = false, setHidden, active, navClicked } = props;
  const { classes } = useStyles();

  const [isFirst, setIsFirst] = useState(true);

  const theme = useMantineTheme();
  const isDrawer = useMediaQuery(theme.fn.smallerThan('sm').substring(7));

  const focusTrapRef = useFocusTrap();
  const clickOutRef = useClickOutside(() => {
    if (isDrawer) setHidden(true);
  });
  const mergedRef = useMergedRef(focusTrapRef, clickOutRef);

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

  useEffect(() => {
    if (isFirst) setIsFirst(false);
  }, []);

  return (
    <Transition
      mounted={isFirst ? false : isDrawer ? !hidden : true}
      transition={{
        in: { transform: 'translateX(0)' },
        out: { transform: 'translateX(-100%)' },
        transitionProperty: 'transform',
      }}
    >
      {(styles) => (
        <Navbar
          ref={mergedRef}
          className={classes.navbar}
          p="md"
          hiddenBreakpoint="sm"
          hidden={false}
          width={{ sm: 200, lg: 300 }}
          style={styles}
        >
          <ScrollArea>
            <Link key="home" href="/" passHref>
              <NavLink
                component="a"
                active={active === 'home'}
                label="Home"
                onClick={() => navClicked('home')}
              />
            </Link>
            {navItems}
          </ScrollArea>
        </Navbar>
      )}
    </Transition>
  );
};

export default AppNavbar;
