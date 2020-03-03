import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import HamburgerMenu from '@components/HamburgerMenu';
import SideBar from '@components/SideBar';
import NickChanger from '../NickChanger';
import AddReviewForm from '../AddReviewForm';
import { 
  AuthContainer, 
  ModalContainer, 
  MapContainer,
} from '@components/container';
import { buttonTheme } from '@config';

const AppLayout = ({ children }) => {
  const { isOpenNicknameChanger, isAddFormOpen } = useSelector((state) => ({
    isOpenNicknameChanger: state.uiController.isOpenNicknameChanger,
    isAddFormOpen: state.review.isAddFormOpen,
  }));

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
        {isAddFormOpen && (
          <ModalContainer>
            <AddReviewForm />
          </ModalContainer>
        )}
      </ThemeProvider>
    </>
  );
};

export default AppLayout;