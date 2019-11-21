import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../actions';
import { FaBars } from 'react-icons/lib/fa';
import Style from './indexStyle';

const HamburgerMenu = () => {
  const isSidebarHidden = useSelector(state => {
    return state.storeOnFlag.isSidebarHidden;
  });

  const dispatch = useDispatch();

  const sidebarClickHandler = () => {
    dispatch(toggleSidebar());
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

export default React.memo(HamburgerMenu);