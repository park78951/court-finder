import React from 'react';
import { useSelector } from 'react-redux';
import Map from '@components/Map';
import HamburgerMenu from '@components/HamburgerMenu';
import SideBar from '@components/SideBar';
import NickChanger from '../NickChanger';
import { AuthContainerView, ModalContainer } from '@components/container';

import { ThemeProvider } from 'styled-components';
import { buttonTheme } from '@config';

const AppLayout = ({ children }) => {
  const { isOpenNicknameChanger } = useSelector(({ flags }) => flags);

  return (
    <>
      <ThemeProvider theme={ buttonTheme }>
        <Map />
        <HamburgerMenu />
        <AuthContainerView />
        <SideBar>
          {children}
        </SideBar>
        {isOpenNicknameChanger && (
          <ModalContainer>
            <NickChanger />
          </ModalContainer>
        )}
      </ThemeProvider>
    </>
  );
};

export default AppLayout;