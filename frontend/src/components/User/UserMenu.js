import React from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import Style from './UserMenuStyle';

const UserMenu = ({ onLogout }) => {
  return (
    <Style.UserMenuWrapper>
      <div
        className='popover-menu__contnent'
      >
        <div 
          className='log-out'
          onClick={onLogout}
        >
          <div>
            LOGOUT
          </div>
          <div className='popover-menu__content--icon'>
            <AiOutlineLogout size={20}/>
          </div>
        </div>
      </div>
    </Style.UserMenuWrapper>
  );
};

export default UserMenu;