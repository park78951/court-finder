import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { apiForLocal, apiForServer } from '@apis';
import { LOG_IN_REQUEST, LOG_OUT_REQUEST } from '@actions/types';
import { 
  completeLogin, 
  failLogin,
  completeLogout,
  failLogout,
  openNicknameChanger,
} from '@actions';

function loginAPI(userInfo) {
  const userApi = typeof window !== 'undefined'
   ? apiForServer
   : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  return userApi.post(
    '/auth/login', 
    userInfo, 
    axiosOptions
  );
}

function* login(action) {
  const userInfo = {
    kakaoId: action.payload.userId,
    kakaoNickname: action.payload.nickname,
  }
  try {
    const { data } = yield call(loginAPI, userInfo);
    yield put(completeLogin({ nickname: data.nickname }));
  } catch (err) {
    console.error(err);
    if(err.response.status === 409) {
      yield put(failLogin(err.response.status));
      yield put(openNicknameChanger());
    } else {
      yield put(failLogin(err.response));
    }
  }
}

function* watchLogin() {
  yield takeLatest(
    LOG_IN_REQUEST,
    login
  )
}

function logoutAPI() {
  const userApi = typeof window !== 'undefined'
   ? apiForServer
   : apiForLocal;

  return userApi.post('/auth/logout', {}, { withCredentials: true });
}

function* logout() {
  try {
    const { status } = yield call(logoutAPI);

    if(status === 200) yield put(completeLogout());
    else throw status;
  } catch (err) {
    console.error(err);
    yield put(failLogout(err.message));
  }
}

function* watchLogout() {
  yield takeLatest(
    LOG_OUT_REQUEST,
    logout
  )
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
  ])
}