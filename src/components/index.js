import { hot } from 'react-hot-loader/root';
import React from 'react';
import Map from './Map';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';
import CourtAddition from './CourtAddition';
import CourtStore from '../courtStore/CourtStore';
import MapContextMenu from './ContextMenu';
import AppContainer from './container/ModalContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default hot(App);