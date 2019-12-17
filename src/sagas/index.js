import { all, call } from 'redux-saga/effects';
import courts from './courts';

export default function* rootSaga() {
  yield all([
    call(courts),
  ]);
}