import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import courtsApi from '../apis';
import { filterCourtsByInput } from '../myUtil';
import {
  completeSearchCourts,
  catchErrorOnSearch,
} from '../actions';
import { SEARCH_COURTS_REQUEST } from '../actions/types';

function searchCourtsAPI() {
  return courtsApi.get('/seoulCourt.json');
}

function* searchCourts(action) {
  const { userInput, filterData } = action.payload;
  try {
    const fetchedData = yield call(searchCourtsAPI);
    const courtsData = fetchedData.data.body;
    const filteredCourts = filterCourtsByInput({
      userInput, 
      courtsData,
      filterData
    });
    yield put(completeSearchCourts(filteredCourts));
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
