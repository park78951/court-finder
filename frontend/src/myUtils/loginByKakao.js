import { KAKAO_API_PROFILE_URL } from '@constants';

export default ({ dispatch, action }) => {
  if(!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.OAUTH_KEY);
  }

  window.Kakao.Auth.login({
    success: succeedKakaoLogin,
    fail: failLoginRequest,
  });

  function succeedKakaoLogin() {
    window.Kakao.API.request({
      url: KAKAO_API_PROFILE_URL,
      success: succeedAuth,
      fail: failLoginRequest,
    });
  }

  function succeedAuth(res) {
    dispatch(action.requestLogin({
      userId: res.id,
      nickname: res.kakao_account.profile.nickname,
    }));
  }
  
  function failLoginRequest(error) {
    dispatch(action.failLogin(error.message));
  }
};