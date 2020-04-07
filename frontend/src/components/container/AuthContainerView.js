import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '@components/User';
import Login from '@components/Login';
import { 
  requestLogin, 
  failLogin, 
  toggleUserMenu,
  requestLogout,
} from '@actions';
import { loginByKakao } from '@myUtils';
import Style from './AuthContainerStyle';

const AuthContainer = () => {
  const { 
    isLoggedIn, 
    nickname 
  } = useSelector(({ user }) => user);
  const { isUserMenuOpen } = useSelector(({ uiController }) => uiController);
  const dispatch = useDispatch();
  
  const onClickUser = useCallback(() => {
    dispatch(toggleUserMenu());
  }, []);
  
  const onLogin = useCallback(() => {
    loginByKakao({dispatch, action: {requestLogin, failLogin}});
  }, []);

  const onLogout = useCallback(() => {
    dispatch(requestLogout());
  }, []);

  return (
    <Style.AuthContainerWrapper isLoggedIn={isLoggedIn}>
      { isLoggedIn 
        ? <User 
          onClickUser={onClickUser}
          isUserMenuOpen={isUserMenuOpen}
          nickname={nickname}
          onLogout={onLogout}
        /> 
        : <Login 
          onLogin={onLogin}
        /> 
      }
    </Style.AuthContainerWrapper>
  );
};

export default React.memo(AuthContainer);