import { fork, put, takeLatest, call } from 'redux-saga/effects';
import courtsApi from '../api';
import { filterCourtsByInput } from '../myUtil';
import {
  completeSearchCourts,
  catchErrorOnSearch,
  startSearchingCourts
} from '../actions';

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
    startSearchingCourts(),
    searchCourts,
  );
}

export default function* searchCourtsSaga() {
  yield fork(watchSearchCourts);
}
