import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import { apiForLocal, apiForServer } from '@apis';
import {
  completeGettingCourts,
  failGettingCourts,
  getUserInput,
  completeGettingCourt,
  failGettingCourt,
} from '@actions';
import { SEARCH_COURTS_REQUEST, SEARCH_COURT_REQUEST } from '@actions/types';
import { prevSearchItems, prevSearchItem } from '@reducers/initialState';
import { courtsPageConfig } from '@config';
import { getSearchQueries } from '@myUtils';

function searchCourtsAPI(query) {
  const courtsApi = typeof window !== 'undefined'
   ? apiForServer
   : apiForLocal;
  const searchQuery = encodeURI(getSearchQueries(query));
  
  return courtsApi.get(`/courts${searchQuery}`);
}

function* searchCourts(action) {
  const searchCode = Base64.encode(JSON.stringify(action.payload));
  try {
    if(prevSearchItems.hasOwnProperty(searchCode)) {
      yield put(completeGettingCourts(prevSearchItems[searchCode]));
    } else {
      const { userInput, city, district, page } = action.payload;
      const query = {
        page,
        "size": courtsPageConfig.courtsPerPage,
        "match": userInput,
        city,
        district,
      };
      yield put(getUserInput(userInput));
      const response = yield call(searchCourtsAPI, query);
      const { totalCount, courts } = response.data;
      yield put(completeGettingCourts({ totalCourts: totalCount, courtsData: courts }));
      prevSearchItems[searchCode] = {totalCourts: totalCount, courtsData: courts};
    }
  } catch (err) {
    console.error(err);
    yield put(failGettingCourts(err.message));
  }
}

function* watchSearchCourts() {
  yield takeLatest(
    SEARCH_COURTS_REQUEST,
    searchCourts,
  );
}

function searchCourtAPI(id) {
  const courtsApi = typeof window !== 'undefined'
   ? apiForServer
   : apiForLocal;
   
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