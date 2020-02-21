import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineUser } from "react-icons/ai";
import { toggleUserMenu } from '@actions';
import UserMenu from './UserMenu';
import Style from './UserStyle';

const User = () => {
  const { isUserMenuOpen } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const onClickUser = useCallback(() => {
    dispatch(toggleUserMenu())
  }, [])

  return (
    <Style.UserWrapper>
      <div 
        className='user__icon'
        onClick={ onClickUser }
      >
        <AiOutlineUser size={25} />
      </div>
      { isUserMenuOpen && <UserMenu /> }
    </Style.UserWrapper>
  );
};

export default User;