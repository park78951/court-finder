import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '@components/User';
import Login from '@components/Login';
import { KAKAO_API_PROFILE_URL } from '@constants';
import { 
  requestLogin, 
  failLogin, 
  toggleUserMenu,
  requestLogout,
} from '@actions';
import Style from './AuthContainerStyle';

const AuthContainer = () => {
  const { 
    isLoggedIn, 
    isUserMenuOpen, 
    nickname 
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const onFail = (error) => {
    dispatch(failLogin(error.message));
  };

  const onSuccessOauth = useCallback((authobj) => {
    window.Kakao.API.request({
      url: KAKAO_API_PROFILE_URL,
      success: (res) => {
        const { id, kakao_account } = res;
        dispatch(requestLogin({
          userId: id,
          nickname: kakao_account.profile.nickname,
        }));
      },
      fail: onFail,
    });
  }, []);

  const onLogin = useCallback(() => {
    if(!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.OAUTH_KEY);
    }
    window.Kakao.Auth.login({
      success: onSuccessOauth,
      fail: onFail,
    });
  }, []);

  const onClickUser = useCallback(() => {
    dispatch(toggleUserMenu());
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