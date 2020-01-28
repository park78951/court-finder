import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
// import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import AppLayout from '@components/AppLayout';
import configureStore from '@store';
import { GlobalStyle } from '@styles'

const helmetContext = {};

const CourtFinder = ({ Component, store }) => {
  console.log(Component);
  return (
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <GlobalStyle />
        <AppLayout>
          <Component />
        </AppLayout>
      </HelmetProvider>
    </Provider>
  );
};

CourtFinder.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

export default withRedux(configureStore)(CourtFinder);
