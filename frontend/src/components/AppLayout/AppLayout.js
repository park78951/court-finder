import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import SideBar from '@components/SideBar';
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

  return (
    <>
      <ThemeProvider theme={ buttonTheme }>
        <MapContainer />
        <AuthContainer />
        <SideBar>
          {children}
        </SideBar>
        { isModalOpen && (
          <ModalContainer
            isOpenNicknameChanger={isOpenNicknameChanger}
            isAddReviewFormOpen={isAddReviewFormOpen}
            isDeleteReviewModalOpen={isDeleteReviewModalOpen}
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default AppLayout;