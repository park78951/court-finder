import React from 'react';
import Map from '@components/Map';
import HamburgerMenu from '@components/HamburgerMenu';
import SideBar from '@components/SideBar';
import NickChanger from '../NickChanger';
import { AuthContainerView, ModalContainer } from '@components/container';

import { ThemeProvider } from 'styled-components';
import { buttonTheme } from '@config';

const AppLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={ buttonTheme }>
        <Map />
        <HamburgerMenu />
        <AuthContainerView />
        <SideBar>
          {children}
        </SideBar>
        <ModalContainer>
          <NickChanger />
        </ModalContainer>
      </ThemeProvider>
    </>
  );
};

export default AppLayout;