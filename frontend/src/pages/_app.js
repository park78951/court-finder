import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import PropTypes from 'prop-types';
import AppLayout from '@components/AppLayout';
import configureStore from '@store';
import { autoLogin } from '@actions';
import { GlobalStyle } from '@styles';

const helmetContext = {};

const CourtFinder = ({ Component, store, pageProps }) => {
  return (
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <GlobalStyle />
        <Helmet>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
          <title>Court Finder Korea</title>
        </Helmet>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </HelmetProvider>
  );
};

CourtFinder.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

CourtFinder.getInitialProps = async context => {
  const { ctx, Component } = context;

  if(ctx.isServer) {
    if(ctx.req.user) {
      const { store } = ctx;
      store.dispatch(autoLogin({
        userId: ctx.req.user.kakaoId,
        nickname: ctx.req.user.nickname,
      }));
    }
  }

  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  return { pageProps };
};

export default withRedux(configureStore)(withReduxSaga(CourtFinder));
