import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import courtsApi from '../apis';
import {
  completeSearchCourts,
  catchErrorOnSearch,
} from '../actions';
import { SEARCH_COURTS_REQUEST } from '../actions/types';

function searchCourtsAPI(body) {
  return courtsApi.post('/courts/search', body);
}

function* searchCourts(action) {
  const { userInput, filterInput, page } = action.payload;
  const body = {
    "page": page,
    "size": 6,
    "query": {
      "match": userInput,
      "filter":{}
    }
  };
  if (filterInput) body.query.filter = filterInput;
  try {
    const response = yield call(searchCourtsAPI, body);
    console.log(response);
    yield put(completeSearchCourts(response.data.courts));
  } catch (err) {
    console.error(err);
    yield put(catchErrorOnSearch(err));
  }
}

function* watchSearchCourts() {
  yield takeLatest(
    SEARCH_COURTS_REQUEST,
    searchCourts,
  );
}

export default function* searchCourtsSaga() {
  yield all([
    fork(watchSearchCourts),
  ]);
}
