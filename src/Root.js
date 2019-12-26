import { hot } from 'react-hot-loader/root';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Provider } from 'react-redux';

import App from './components';
import store from './store';

const GlobalStyle = createGlobalStyle`
  ${ normalize }

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