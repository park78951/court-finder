import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { CourtContext } from '../../courtStore/CourtStore';
import { TOGGLE_SIDEBAR } from '../../config/constants';
import Style from './indexStyle';

const HamburgerMenu = () => {
  const { uiToggleDispatch, isSidebarHidden } = useContext(CourtContext);
  const sidebarClickHandler = () => {
    uiToggleDispatch({ type: TOGGLE_SIDEBAR });
  };
  
  return (
    <Style.HamburgerWrapper 
      onClick={ sidebarClickHandler }
      isSidebarHidden={ isSidebarHidden }
    >
      <FaBars size={40} />
    </Style.HamburgerWrapper>
  );
};

export default HamburgerMenu;