import { all, call } from 'redux-saga/effects';
import court from './court';
import user from './user'

export default function* rootSaga() {
  yield all([
    call(court),
    call(user),
  ]);
}