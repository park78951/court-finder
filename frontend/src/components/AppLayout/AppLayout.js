import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import HamburgerMenu from '@components/HamburgerMenu';
import SideBar from '@components/SideBar';
import NickChanger from '../NickChanger';
import { 
  AuthContainer, 
  ModalContainer, 
  MapContainer,
} from '@components/container';
import { buttonTheme } from '@config';

const AppLayout = ({ children }) => {
  const { isOpenNicknameChanger } = useSelector(({ uiController }) => uiController);

  return (
    <>
      <ThemeProvider theme={ buttonTheme }>
        <MapContainer />
        <HamburgerMenu />
        <AuthContainer />
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