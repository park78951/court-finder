import { hot } from 'react-hot-loader/root';
import React from 'react';
import Map from './Map';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';
import CourtAddition from './CourtAddition';
import CourtStore from '../courtStore/CourtStore';
import MapContextMenu from './ContextMenu';
import AppContainer from './container/ModalContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
   box-sizing: border-box; 
  }
  
  body {
    position: relative;
    background-color: lightblue;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CourtStore>
        <MapContextMenu>
          <Map />
        </MapContextMenu>
        <HamburgerMenu />
        <SideBar />
        <AppContainer>
          <CourtAddition />
        </AppContainer>
      </CourtStore>
    </>
  );
};

export default hot(App);