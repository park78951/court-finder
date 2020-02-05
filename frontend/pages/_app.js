import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import { requestCourt } from '@actions';
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
  console.log('a');
  const { ctx } = context;
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default withRedux(configureStore)(CourtFinder);
