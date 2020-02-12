import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet-async'
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
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          {helmetContext.helmet.meta.toComponent()}
          {helmetContext.helmet.link.toComponent()}
          {helmetContext.helmet.title.toComponent()}
          {helmetContext.helmet.script.toComponent()}
          <title>Court Finder Korea</title>
        </Helmet>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}