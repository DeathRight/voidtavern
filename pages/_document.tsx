import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { createStylesServer, ServerStyles } from '@mantine/next';
import { rtlCache } from '../utils/rtl-cache';
import i18nextConfig from '../next-i18next.config';

const stylesServer = createStylesServer(rtlCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }

  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Megrim&family=Nanum+Gothic+Coding:wght@400;700&family=Oxygen:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
