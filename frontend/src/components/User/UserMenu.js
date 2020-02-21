import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineLogout } from "react-icons/ai";
import { requestLogout } from '@actions';
import Style from './UserMenuStyle';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(requestLogout());
  }, [])

  return (
    <Style.UserMenuWrapper>
      <div
        className='popover-menu__contnent'
      >
        <div 
          className='log-out'
          onClick={ onLogout }
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