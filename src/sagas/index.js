import { all, call } from 'redux-saga/effects';
import courts from './courtsSearch';

export default function* rootSaga() {
  yield all([
    call(courts),
  ]);
}