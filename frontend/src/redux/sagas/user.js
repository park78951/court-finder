import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { apiForLocal, apiForServer } from '@apis';
import { LOG_IN_REQUEST, LOG_OUT_REQUEST } from '@actions/types';
import { 
  succeedLogin, 
  failLogin,
  succeedLogout, 
  failLogout,
  toggleUserMenu,
} from '@actions';

function loginAPI(userInfo) {
  const userApi = typeof window !== 'undefined'
   ? apiForServer
   : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  return userApi.post('/auth/login', userInfo, axiosOptions);
}

function* login(action) {
  const userInfo = action.payload;
  try {
    const { data } = yield call(loginAPI, userInfo);
    yield put(succeedLogin({ userId: data.kakaoId, nickname: data.nickname }));
  } catch (err) {
    console.error(err);
    yield put(failLogin(err.message));
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

    if(status === 200) yield put(succeedLogout());
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