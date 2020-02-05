import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import courtsApi from '../apis';
import {
  completeGettingCourts,
  failGettingCourts,
  getUserInput,
  completeGettingCourt,
  failGettingCourt,
} from '../actions';
import { SEARCH_COURTS_REQUEST, SEARCH_COURT_REQUEST } from '../actions/types';
import { prevSearchItems, prevSearchItem } from '@reducers/initialState';

function searchCourtsAPI(query) {
  const { page, size, match, city, district } = query;
  return courtsApi.get(
    `/courts/search?page=${page}&size=${size}&match=${match}&city=${city}&district=${district}`
  );
}

function* searchCourts(action) {
  const searchCode = Base64.encode(JSON.stringify(action.payload));
  try {
    if(prevSearchItems.hasOwnProperty(searchCode)) {
      yield put(completeGettingCourts(prevSearchItems[searchCode]));
    } else {
      const { userInput, filterInput, page } = action.payload;
      const query = {
        "page": page,
        "size": 6,
        "match": userInput,
        "city": filterInput.city,
        "district": filterInput.district,
      };
      yield put(getUserInput(userInput));
      const response = yield call(searchCourtsAPI, query);
      console.log(response)
      const { totalCount, courts } = response.data;
      yield put(completeGettingCourts({ totalCourts: totalCount, courtsData: courts }));
      prevSearchItems[searchCode] = {totalCourts: totalCount, courtsData: courts};
    }
  } catch (err) {
    console.error(err);
    yield put(failGettingCourts(err));
  }
}

function* watchSearchCourts() {
  yield takeLatest(
    SEARCH_COURTS_REQUEST,
    searchCourts,
  );
}

function searchCourtAPI(id) {
  return courtsApi.get(`/courts/${id}`);
}

function* searchCourt(action) {
  const id = action.payload;
  const searchCode = Base64.encode(JSON.stringify(id));
  try {
    if(prevSearchItem.hasOwnProperty(searchCode)) {
      yield put(completeGettingCourt(prevSearchItem[searchCode]));
    } else {
      const { data } = yield call(searchCourtAPI, id);
      yield put(completeGettingCourt({ courtData: data }));
      prevSearchItem[searchCode] = {courtData: data};
    }
  } catch (err) {
    console.error(err);
    yield put(failGettingCourt(err));
  }
}

function* watchSearchCourt() {
  yield takeLatest(
    SEARCH_COURT_REQUEST,
    searchCourt,
  );
}

export default function* courtSaga() {
  yield all([
    fork(watchSearchCourts),
    fork(watchSearchCourt),
  ]);
}
