import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { apiForLocal, apiForServer } from '@apis';
import { getSearchQueries, cacheItem, getCacheKey } from '@myUtils';
import {
  completeGettingCourts,
  failGettingCourts,
  completeGettingCourt,
  failGettingCourt,
} from '@actions';
import { SEARCH_COURTS_REQUEST, SEARCH_COURT_REQUEST } from '@actions/types';
import { requestSize, apiRoutes } from '@config';

const searchItemsCache = {};
const searchItemCache = {};

function searchCourtsAPI(query) {
  const courtsApi = typeof window !== 'undefined'
    ? apiForServer
    : apiForLocal;
  const searchQuery = encodeURI(getSearchQueries(query));
  
  return courtsApi.get(`${apiRoutes.COURTS_SEARCH}${searchQuery}`);
}

function* searchCourts({ payload }) {
  const cacheKey = getCacheKey(payload);
  try {
    if(searchItemsCache.hasOwnProperty(cacheKey)) {
      yield put(completeGettingCourts(searchItemsCache[cacheKey]));
    } else {
      const { userInput, filterInput, page } = payload;
      const query = {
        page,
        size: requestSize.courts,
        match: userInput,
        city: filterInput.city,
        district: filterInput.district,
      };
      const response = yield call(searchCourtsAPI, query);
      yield put(completeGettingCourts(response.data));
      cacheItem({ 
        cache: searchItemsCache,
        key: cacheKey,
        item: response.data,
      });
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
   
  return courtsApi.get(`${apiRoutes.COURTS}/${id}`);
}

function* searchCourt({ payload }) {
  const cacheKey = getCacheKey(payload);
  try {
    if(searchItemCache.hasOwnProperty(cacheKey)) {
      yield put(completeGettingCourt(searchItemCache[cacheKey]));
    } else {
      const response = yield call(searchCourtAPI, payload);
      yield put(completeGettingCourt(response.data));
      cacheItem({
        cache: searchItemCache,
        key: cacheKey,
        item: response.data,
      });
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
