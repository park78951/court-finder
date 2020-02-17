import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import Style from './UserStyle';

const Login = () => {
  return (
    <Style.UserWrapper>
      <AiOutlineUser size={25} />
    </Style.UserWrapper>
  );
};

export default Login;