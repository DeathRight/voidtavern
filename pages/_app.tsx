import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import theme from '../modules/MantineTheme/MantineThemeOverride';
import '../common/styles/transitions.css';
import { ltrCache } from '../common/utils/ltr-cache';
import { rtlCache } from '../common/utils/rtl-cache';
import { RouterTransition } from '../common/components/RouterTransition';
import { getPage, isHome } from '../common/utils/routing';
import AppNavbar, { AppNavbarDrawer } from '../common/components/App/AppNavbar';
import AppContext from '../common/components/App/AppContext';
import AppHeader from '../common/components/App/AppHeader';

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

  const [active, setActive] = useState(
    (pageProps.pId as string) ?? (isHome(router.asPath) ? 'home' : '404')
  );

  const navClicked = (id: string) => {
    setActive(id);
    setOpened(false);
  };

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
              <AppContext.Provider
                value={{
                  themeValue: colorScheme,
                  onToggleTheme: () => toggleColorScheme(),
                  rtlValue: rtl,
                  onToggleRtl: () => setRtl(!rtl),
                  navbarOpened: opened,
                  onNavBarToggle: () => setOpened(!opened),
                }}
              >
                <AppShell
                  header={<AppHeader />}
                  navbar={<AppNavbar active={active} navClicked={navClicked} />}
                >
                  <AppNavbarDrawer active={active} navClicked={navClicked} />
                  <AnyComp {...pageProps} />
                </AppShell>
              </AppContext.Provider>
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
