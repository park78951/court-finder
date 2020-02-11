import React from 'react';
import User from '@components/User';
import Login from '@components/Login';
import Style from './AuthContainerStyle';

const AuthContainer = () => {
  return (
    <Style.AuthContainerWrapper>
      <User />
      {/* <Login /> */}
    </Style.AuthContainerWrapper>
  );
};

export default AuthContainer;