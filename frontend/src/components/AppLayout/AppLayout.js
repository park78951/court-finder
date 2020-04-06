import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import SideBar from '@components/SideBar';
import { 
  AuthContainer, 
  ModalContainer, 
  MapContainer,
} from '@components/container';
import { toggleSidebar } from '@actions';
import { buttonTheme } from '@config';

const AppLayout = ({ children }) => {
  const { 
    isOpenNicknameChanger, 
    isAddReviewFormOpen,
    isDeleteReviewModalOpen,
    isModalOpen,
    isSidebarHidden,
  } = useSelector(state => state.uiController);
  const dispatch = useDispatch();
  const { route } = useRouter();

  const sidebarToggler = useCallback(() => {
    dispatch(toggleSidebar());
  }, [isSidebarHidden]);

  return (
    <>
      <ThemeProvider theme={ buttonTheme }>
        <MapContainer />
        <AuthContainer />
        <SideBar 
          isSidebarHidden={isSidebarHidden}
          currentRoute={route}
          sidebarToggler={sidebarToggler}
        >
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

export default React.memo(AppLayout);