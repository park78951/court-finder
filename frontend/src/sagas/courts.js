import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import courtsApi from '../apis';
import {
  completeSearchCourts,
  catchErrorOnSearch,
} from '../actions';
import { SEARCH_COURTS_REQUEST } from '../actions/types';
import { prevSearchItems, prevSearchItem } from '@reducers/initialState';

function searchCourtsAPI(body) {
  return courtsApi.post('/courts/search', body);
}

function* searchCourts(action) {
  const searchCode = Base64.encode(JSON.stringify(action.payload));
  try {
    if(prevSearchItems.hasOwnProperty(searchCode)) {
      yield put(completeSearchCourts(prevSearchItems[searchCode]));
    } else {
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
      const response = yield call(searchCourtsAPI, body);
      const { totalCount, courts } = response.data;
      yield put(completeSearchCourts({ totalCourts: totalCount, courtsData: courts }));
      prevSearchItems[searchCode] = {totalCourts: totalCount, courtsData: courts};
    }
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
