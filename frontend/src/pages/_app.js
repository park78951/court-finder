import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import AppLayout from '@components/AppLayout';
import configureStore from '@store';
import { GlobalStyle } from '@styles'

const helmetContext = {};

const CourtFinder = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <HelmetProvider context={helmetContext}>
          <GlobalStyle />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
};

CourtFinder.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

CourtFinder.getInitialProps = async context => {
  const { ctx, Component} = context;
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(ctx);
  }
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  return { pageProps };
};

export default withRedux(configureStore)(withReduxSaga(CourtFinder));