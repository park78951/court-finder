import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { KAKAO_API_PROFILE_URL } from '@constants';
import { requestLogin, failLogin } from '@actions';
import Style from './LoginStyle';

const User = () => {
  const dispatch = useDispatch();

  const onFail = (error) => {
    dispatch(failLogin(error));
  }

  const onSuccessOauth = (authobj) => {
    window.Kakao.API.request({
      url: KAKAO_API_PROFILE_URL,
      success: (res) => {
        console.log(res);
        const { id, kakao_account } = res;
        dispatch(requestLogin({
          kakaoId: id,
          kakaoNickname: kakao_account.profile.nickname,
        }));
      },
      fail: onFail,
    })
  }

  const clickLogin = useCallback(() => {
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