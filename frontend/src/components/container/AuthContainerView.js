import React from 'react';
import { useSelector } from 'react-redux';
import User from '@components/User';
import Login from '@components/Login';
import Style from './AuthContainerStyle';

const AuthContainer = () => {
  const { isLoggedIn } = useSelector(({ user }) => user);
  return (
    <Style.AuthContainerWrapper>
      { isLoggedIn ? <User /> : <Login /> }
    </Style.AuthContainerWrapper>
  );
};

export default React.memo(AuthContainer);