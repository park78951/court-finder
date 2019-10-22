import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { CourtContext } from '../../courtStore/CourtStore';
import { TOGGLE_SIDEBAR } from '../../config/constants';
import Style from './indexStyle';
import PropTypes from 'prop-types';

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
      <FaBars size={33} />
    </Style.HamburgerWrapper>
  );
};

HamburgerMenu.propTypes = {
  uiToggleDispatch: PropTypes.func,
  isSidebarHidden: PropTypes.bool
};

export default HamburgerMenu;