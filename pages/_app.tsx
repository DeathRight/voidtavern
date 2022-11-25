import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { appWithTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';
import { rtlCache } from '../common/utils/rtl-cache';
import AppHeader from '../common/components/AppHeader/AppHeader';
import theme from '../modules/MantineTheme/MantineThemeOverride';

function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [rtl, setRtl] = useState(false);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>VoidTavern - Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <NextNProgress />
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <div dir={rtl ? 'rtl' : 'ltr'}>
          <MantineProvider
            theme={{ ...theme, colorScheme, dir: rtl ? 'rtl' : 'ltr' }}
            emotionCache={rtl ? rtlCache : undefined}
            withGlobalStyles
            withNormalizeCSS
          >
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
                <Component {...pageProps} />
              </AppShell>
            </NotificationsProvider>
          </MantineProvider>
        </div>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default appWithTranslation(App);
