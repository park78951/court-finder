import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdInfo, MdAssignment } from 'react-icons/md';
import { routes, iconSize } from '../../../../config/initConfig';
import Style from './NavBtnStyle';

const NavBtn = () => {
  const { review, infoDetail } = routes;
  const { headerInfo_nav } = iconSize;

  return (
    <Style.NavBtnStyle>
      <NavLink 
        exact
        to={ infoDetail }
        activeClassName='nav__selected'
        replace={ true }
      >
        <button>
          <MdInfo size={ headerInfo_nav } />
        </button>
      </NavLink>
      <NavLink 
        exact
        to={ review }
        activeClassName='nav__selected'
        replace={ true }
      >
        <button>
          <MdAssignment size={ headerInfo_nav } />
        </button>
      </NavLink>
    </Style.NavBtnStyle>
  );
};

export default NavBtn;