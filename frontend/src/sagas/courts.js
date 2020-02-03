import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import courtsApi from '../apis';
import {
  completeSearchCourts,
  catchErrorOnSearch,
} from '../actions';
import { SEARCH_COURTS_REQUEST } from '../actions/types';
import { prevSearchItems, prevSearchItem } from '@reducers/initialState';

function searchCourtsAPI(query) {
  const { page, size, match, city, district } = query;
  return courtsApi.get(
    `/courts/search?page=${page}&size=${size}&match=${match}&city=${city}&district=${district}`
  );
}

function* searchCourts(action) {
  console.log(localStorage);
  const searchCode = Base64.encode(JSON.stringify(action.payload));
  try {
    if(prevSearchItems.hasOwnProperty(searchCode)) {
      yield put(completeSearchCourts(prevSearchItems[searchCode]));
    } else {
      const { userInput, filterInput, page } = action.payload;
      const query = {
        "page": page,
        "size": 6,
        "match": userInput,
        "city": filterInput.city,
        "district": filterInput.district,
      };
      const response = yield call(searchCourtsAPI, query);
      console.log(response);
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
