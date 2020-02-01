import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import AppLayout from '@components/AppLayout';
import configureStore from '@store';
import { GlobalStyle } from '@styles'

const helmetContext = {};

const CourtFinder = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <HelmetProvider context={helmetContext}>
          <GlobalStyle />
          <AppLayout>
            <Component />
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

export default withRedux(configureStore)(CourtFinder);
