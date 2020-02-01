import React from 'react';
import { useSelector } from 'react-redux';
import Map from './Map';
import HamburgerMenu from './HamburgerMenu';
import SideBar from './SideBar';
import CourtAddition from './CourtAddition';
import MapContextMenu from './ContextMenu';
import { ModalContainer } from './container';

const App = () => {
  // const courtAdditionFlag = useSelector(state => {
  //   return state.storeOnFlag.courtAdditionFlag;
  // });
  
  return (
    <>
      <Router>
        {/* <MapContextMenu> */}
          <Map />
        {/* </MapContextMenu> */}
        <HamburgerMenu />
        <SideBar />
        {/* { courtAdditionFlag && (
          <ModalContainer>
            <CourtAddition />
          </ModalContainer>
        ) } */}
      </Router>
    </>
  );
};

export default App;