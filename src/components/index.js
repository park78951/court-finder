import { hot } from 'react-hot-loader/root';
import React from 'react';
import Map from './Map';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';
import { createGlobalStyle } from 'styled-components';
import PlaceAddition from './PlaceAddition';

const GlobalStyle = createGlobalStyle`
  *{
   box-sizing: border-box; 
  }
  
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
      <HamburgerMenu />
      <SideBar />
      <PlaceAddition />
    </>
  );
}

export default hot(App);