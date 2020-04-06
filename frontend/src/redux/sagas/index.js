import { all, call } from 'redux-saga/effects';
import court from './court';
import user from './user';
import review from './review';

export default function* rootSaga() {
  yield all([
    call(court),
    call(user),
    call(review),
  ]);
}