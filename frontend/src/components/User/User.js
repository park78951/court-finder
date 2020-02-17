import React, { useCallback, useState, useEffect } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { KAKAO_API_URL_PROFILE } from '@constants'
import Style from './UserStyle';

const isLoggedIn = false;

const User = () => {
  const [successObj, setSuccessObj] = useState(null);
  const [errorObj, setErrorObj] = useState(null);

  const onSuccess = () => {
    window.Kakao.API.request({
      url: KAKAO_API_URL_PROFILE,
      success: (res) => setSuccessObj(res),
    })
  }
  const onFail = (authObj) => setErrorObj(authObj);

  const clickLogin = useCallback(() => {
    window.Kakao.init(process.env.OAUTH_KEY);
    window.Kakao.Auth.login({
      success: onSuccess,
      fail: onFail,
    });
  }, []);

  useEffect(() => {
    console.log(successObj);
    console.log(errorObj);
    
  }, [successObj, errorObj]);

  return (
    <Style.UserWrapper 
      isLoggedIn={isLoggedIn}
      onClick={clickLogin}
    >
      {isLoggedIn ? <AiOutlineUser size={25} /> : 'Login'}
    </Style.UserWrapper>
  );
};

export default User;