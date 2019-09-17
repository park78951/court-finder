import { hot } from 'react-hot-loader/root';
import React from 'react';
import Map from './Map';
import Search from './Search';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightblue;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Map />
      <Search />
    </>
  );
}

export default hot(App);