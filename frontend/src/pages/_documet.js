import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    let helmetContext = null;
    const sheet = new ServerStyleSheet();
    const page = renderPage({
      enhanceApp: App => props => {
        const app = new App(props);
        helmetContext = app.helmetContext;
        return sheet.collectStyles(app);
      },
      enhancePage: Page => page,
    });
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags, helmetContext };
  }

  render() {
    const { helmetContext } = this.props;

    return (
      <html lang='ko' dir='ltr'>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
          />
          {helmetContext.helmet.meta.toComponent()}
          {helmetContext.helmet.link.toComponent()}
          {helmetContext.helmet.title.toComponent()}
          {helmetContext.helmet.script.toComponent()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}