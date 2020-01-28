import React from 'react';
import Map from '../Map';
import HamburgerMenu from '../HamburgerMenu';
import SideBar from '../SideBar';

const AppLayout = ({ children }) => {
  return (
    <>
      <Map />
      <HamburgerMenu />
      <SideBar>
        {children}
      </SideBar>
    </>
  );
};

export default AppLayout;