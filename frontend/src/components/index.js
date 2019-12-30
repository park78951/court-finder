import React from 'react';
import Map from './Map';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';
import CourtAddition from './CourtAddition';
import MapContextMenu from './ContextMenu';
import AppContainer from './container/ModalContainer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <MapContextMenu>
          <Map />
        </MapContextMenu>
        <HamburgerMenu />
        <SideBar />
        <AppContainer>
          <CourtAddition />
        </AppContainer>
      </Router>
    </>
  );
};

export default App;