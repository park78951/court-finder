import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import courtsApi from '../apis';
import { filterCourtsByInput } from '../myUtil';
import {
  completeSearchCourts,
  catchErrorOnSearch,
} from '../actions';
import { SEARCH_COURTS_REQUEST } from '../actions/types';

function searchCourtsAPI(body) {
  return courtsApi.post('/courts/search', body);
}

function* searchCourts(action) {
  const { userInput, filterInput } = action.payload;
  const body = {
    "page": 1,
    "size": 10,
    "query": {
      "match": userInput,
      "filter":{}
    }
  }
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
