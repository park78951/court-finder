import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdInfo, MdAssignment } from 'react-icons/md';
import Style from './NavBtnStyle';

const NavBtn = () => {
  return (
    <Style.NavBtnStyle>
      <NavLink 
        exact
        to='/courtinfo/'
        activeClassName='nav__selected'
        replace={ true }
      >
        <button>
          <MdInfo size={ 40 } />
        </button>
      </NavLink>
      <NavLink 
        exact
        to='/courtinfo/review'
        activeClassName='nav__selected'
        replace={ true }
      >
        <button>
          <MdAssignment size={ 40 } />
        </button>
      </NavLink>
    </Style.NavBtnStyle>
  );
};

export default NavBtn;