import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { KAKAO_API_PROFILE_URL } from '@constants';
import { requestLogin, login, failLogin } from '@actions';
import Style from './LoginStyle';

const User = () => {
  const dispatch = useDispatch();

  const onFail = (error) => {
    dispatch(failLogin(error));
  }

  const onSuccessOauth = () => {
    window.Kakao.API.request({
      url: KAKAO_API_PROFILE_URL,
      success: (res) => {
        const { id, kakao_account } = res;
        dispatch(login({
          userId: id,
          nickname: kakao_account.profile.nickname,
          email: kakao_account.email,
        }));
      },
      fail: onFail,
    })
  }

  const clickLogin = useCallback(() => {
    dispatch(requestLogin());
    window.Kakao.init(process.env.OAUTH_KEY);
    window.Kakao.Auth.login({
      success: onSuccessOauth,
      fail: onFail,
    });
  }, []);

  return (
    <Style.LoginWrapper 
      onClick={clickLogin}
    >
      Login
    </Style.LoginWrapper>
  );
};

export default User;