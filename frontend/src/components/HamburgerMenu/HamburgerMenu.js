import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '@actions';
import { FaBars } from 'react-icons/fa';
import Style from './HamburgerMenuStyle';

const HamburgerMenu = () => {
  const isSidebarHidden = useSelector(state => {
    return state.flags.isSidebarHidden;
  });
  const dispatch = useDispatch();

  const sidebarClickHandler = useCallback(() => {
    dispatch(toggleSidebar());
  }, []);
  
  return (
    <Style.HamburgerWrapper 
      onClick={ sidebarClickHandler }
      isSidebarHidden={ isSidebarHidden }
    >
      <FaBars size={25} />
    </Style.HamburgerWrapper>
  );
};

export default React.memo(HamburgerMenu);