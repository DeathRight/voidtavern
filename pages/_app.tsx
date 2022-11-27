import { useEffect, useMemo, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  AppShell,
  Navbar,
  NavLink,
  ScrollArea,
} from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AppHeader from '../common/components/AppHeader/AppHeader';
import theme from '../modules/MantineTheme/MantineThemeOverride';
import '../common/styles/transitions.css';
import { ltrCache } from '../common/utils/ltr-cache';
import { rtlCache } from '../common/utils/rtl-cache';
import { RouterTransition } from '../common/components/RouterTransition';
import Projects from '../common/utils/Projects';
import { getPage, isHome } from '../common/utils/routing';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  // ? Some strange typing error in NextJS where
  // ? `Component` becomes unusable, so we force `any`
  const AnyComp = Component as any;

  const [rtl, setRtl] = useState(false);

  /* ------------------------------- ColorScheme ------------------------------ */
  const prefColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: prefColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  /* --------------------------------- NavBar --------------------------------- */
  // Burger state
  const [opened, setOpened] = useState(false);

  const router = useRouter();

  const [active, setActive] = useState(pageProps.pId ?? (isHome(router.asPath) ? 'home' : '404'));

  const navClicked = (id: string) => {
    setActive(id);
    setOpened(false);
  };
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

  useEffect(() => setActive(getPage(router.asPath, pageProps)), [router]);
  /* ------------------------------------ * ----------------------------------- */
  return (
    <>
      <Head>
        <title>VoidTavern - Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <div dir={rtl ? 'rtl' : 'ltr'}>
          <MantineProvider
            theme={{ ...theme, colorScheme, dir: rtl ? 'rtl' : 'ltr' }}
            emotionCache={rtl ? rtlCache : ltrCache}
            withGlobalStyles
            withNormalizeCSS
          >
            <RouterTransition />
            <NotificationsProvider>
              <AppShell
                header={
                  <AppHeader
                    themeValue={colorScheme}
                    onToggleTheme={(t) => toggleColorScheme(t)}
                    rtlValue={rtl}
                    onRtlToggle={(v) => setRtl(v)}
                    opened={opened}
                    onOpen={(v) => setOpened(v)}
                  />
                }
                navbar={
                  <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                    sx={(th) => ({ [th.fn.largerThan('sm')]: { top: '0' } })}
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
                }
                styles={() => ({ main: { margin: '0', paddingTop: '0px', width: '100%' } })}
              >
                <AnyComp {...pageProps} />
              </AppShell>
            </NotificationsProvider>
          </MantineProvider>
        </div>
      </ColorSchemeProvider>
    </>
  );
}

/*App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});*/

export default appWithTranslation(App);
