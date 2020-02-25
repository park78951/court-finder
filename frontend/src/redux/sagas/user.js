import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { apiForLocal, apiForServer } from '@apis';
import { LOG_IN_REQUEST, LOG_OUT_REQUEST } from '@actions/types';
import { 
  succeedLogin, 
  failLogin,
  succeedLogout,
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

  return userApi.post('/auth/login', userInfo, axiosOptions);
}

function* login(action) {
  const userInfo = action.payload;
  try {
    const { data } = yield call(loginAPI, userInfo);
    yield put(succeedLogin({ nickname: data.nickname }));
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