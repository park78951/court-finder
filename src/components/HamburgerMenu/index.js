import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { CourtContext } from '../../courtStore/CourtStore';
import { TOGGLE_SIDEBAR } from '../../config/constants';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 60px;
  height: 60px;
  z-index: 10;
  background-color: ${ ({ isSidebarHidden }) => isSidebarHidden ? 'white' : 'transparent' };
  border: none;
  border-radius: 5px;
  cursor: pointer;
   :focus {
     outline: none;
   }
`;

const HamburgerMenu = () => {
  const { uiToggleDispatch, isSidebarHidden } = useContext(CourtContext);
  const sidebarClickHandler = () => {
    uiToggleDispatch({ type: TOGGLE_SIDEBAR });
  };
  
  return (
    <HamburgerWrapper 
      onClick={ sidebarClickHandler }
      isSidebarHidden={ isSidebarHidden }
    >
      <FaBars size={40} />
    </HamburgerWrapper>
  );
};

export default HamburgerMenu;