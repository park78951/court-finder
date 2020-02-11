import { useState, useEffect } from 'react';

export default (loginKey) => {
  if(!window.Kakao) return;

  const [successObj, setSuccessObj] = useState(null);
  const [errorObj, setErrorObj] = useState(null);

  const onSuccess = (authObj) => {
    setSuccessObj(authObj);
  }

  const onFail = (authObj) => {
    setErrorObj(authObj);
  }

  useEffect(() => {
    window.Kakao.init(loginKey);
    window.Kakao.Auth.login({
      success: onSuccess,
      fail: onFail,
    });
  }, []);

  return { successObj, errorObj }
}