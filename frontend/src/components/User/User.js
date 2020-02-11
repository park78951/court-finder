import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import Style from './UserStyle';

const isLoggedIn = false;

const User = () => {
  return (
    <Style.UserWrapper isLoggedIn={isLoggedIn}>
      {isLoggedIn ? <AiOutlineUser size={25} /> : 'Login'}
    </Style.UserWrapper>
  );
};

export default User;