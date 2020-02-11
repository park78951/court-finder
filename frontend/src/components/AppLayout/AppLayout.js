import React from 'react';
import Map from '@components/Map';
import HamburgerMenu from '@components/HamburgerMenu';
import SideBar from '@components/SideBar';
import { AuthContainerView } from '@components/container';

const AppLayout = ({ children }) => {
  return (
    <>
      <Map />
      <HamburgerMenu />
      <AuthContainerView />
      <SideBar>
        {children}
      </SideBar>
    </>
  );
};

export default AppLayout;