import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import { apiForLocal, apiForServer } from '../apis';
import { LOG_IN_REQUEST } from '@actions/types';
import { succeedLogin, failLogin } from '@actions';

function loginAPI(userInfo) {
  const userApi = typeof window !== 'undefined'
   ? apiForServer
   : apiForLocal;
  // const userApi = apiForLocal;

  return userApi.post('/auth/login', userInfo);
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

export default function* userSaga() {
  yield all([
    fork(watchLogin),
  ])
}