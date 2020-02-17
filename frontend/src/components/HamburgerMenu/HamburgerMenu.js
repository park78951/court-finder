import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa';
import { toggleSidebar } from '@actions';
import Style from './HamburgerMenuStyle';

const HamburgerMenu = () => {
  const isSidebarHidden = useSelector(state => {
    return state.flags.isSidebarHidden;
  });
  const dispatch = useDispatch();
  const { route } = useRouter();

  const sidebarClickHandler = useCallback(() => {
    dispatch(toggleSidebar());
  }, []);
  
  return (
    <Style.HamburgerWrapper 
      onClick={ sidebarClickHandler }
      isSidebarHidden={ isSidebarHidden }
      curPath={ route }
    >
      <FaBars size={25} />
    </Style.HamburgerWrapper>
  );
};

export default React.memo(HamburgerMenu);