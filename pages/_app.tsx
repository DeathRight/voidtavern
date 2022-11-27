import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { appWithTranslation } from 'next-i18next';
import AppHeader from '../common/components/AppHeader/AppHeader';
import theme from '../modules/MantineTheme/MantineThemeOverride';
import '../common/styles/transitions.css';
import { ltrCache } from '../common/utils/ltr-cache';
import { rtlCache } from '../common/utils/rtl-cache';
import { RouterTransition } from '../common/components/RouterTransition';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  // ? Some strange typing error in NextJS where
  // ? `Component` becomes unusable, so we force`any`
  const AnyComp = Component as any;

  const [rtl, setRtl] = useState(false);

  const prefColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: prefColorScheme,
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

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
                  />
                }
                styles={() => ({ main: { padding: '0', margin: '0', width: '100%' } })}
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
