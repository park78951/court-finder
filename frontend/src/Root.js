import { hot } from 'react-hot-loader/root';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Provider } from 'react-redux';

import App from './components';
import store from './store';

const GlobalStyle = createGlobalStyle`
  ${ reset }

  *{
   box-sizing: border-box; 
  }
  
  body {
    position: relative;
    background-color: lightblue;
    width: 100%;
    height: 100%;
  }
`;

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={ store() }>
        <App />
      </Provider>
    </>
  );
};

export default hot(Root);