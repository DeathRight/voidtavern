import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import AppHeader from '../common/components/AppHeader';
import theme from '../modules/MantineTheme/MantineThemeOverride';
import '../common/styles/transitions.css';
import { ltrCache } from '../common/utils/ltr-cache';
import { rtlCache } from '../common/utils/rtl-cache';
import { RouterTransition } from '../common/components/RouterTransition';
import { getPage, isHome } from '../common/utils/routing';
import AppNavbar from '../common/components/AppNavbar';

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
                  <AppNavbar
                    hidden={!opened}
                    setHidden={(h) => setOpened(!h)}
                    active={active}
                    navClicked={navClicked}
                  />
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
