import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import SideBar from '@components/SideBar';
import NickChanger from '../NickChanger';
import AddReviewForm from '../AddReviewForm';
import ReviewDeleter from '../ReviewDeleter';
import { 
  AuthContainer, 
  ModalContainer, 
  MapContainer,
} from '@components/container';
import { buttonTheme } from '@config';

const AppLayout = ({ children }) => {
  const { 
    isOpenNicknameChanger, 
    isAddReviewFormOpen,
    isDeleteReviewModalOpen,
    isModalOpen,
  } = useSelector(state => state.uiController);

  const switchingModal = () => {
    switch (true) {
      case isOpenNicknameChanger: {
        return (
          <ModalContainer>
            <NickChanger />
          </ModalContainer>
        );
      }

      case isAddReviewFormOpen: {
        return (
          <ModalContainer>
            <AddReviewForm />
          </ModalContainer>
        );
      }

      case isDeleteReviewModalOpen: {
        return (
          <ModalContainer>
            <ReviewDeleter />
          </ModalContainer>
        );
      }
    
      default: {
        return null;
      }
    }
  };

  return (
    <>
      <ThemeProvider theme={ buttonTheme }>
        <MapContainer />
        <AuthContainer />
        <SideBar>
          {children}
        </SideBar>
        {isModalOpen && switchingModal()}
      </ThemeProvider>
    </>
  );
};

export default AppLayout;