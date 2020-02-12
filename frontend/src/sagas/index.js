import { all, call } from 'redux-saga/effects';
import court from './court';

export default function* rootSaga() {
  yield all([
    call(court),
  ]);
}