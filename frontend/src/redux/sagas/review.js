import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { apiForLocal, apiForServer } from '@apis';
import { 
  LOAD_ALLREVIEWS_REQUEST, 
  LOAD_MYREVIEW_REQUEST,
  UPLOAD_REVIEW_REQUEST,
} from '@actions/types';
import { 
  completeAllReviews, 
  failAllReviews,
  completeMyReview,
  failMyReview,
  completeUploadReview,
  failUploadReview,
} from '@actions';
import { getSearchQueries } from '@myUtils';

const mockReviews = {
  hasNextPage: true,
  reviews: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdAt: '2020-01-01',
      writer: '쌍큐',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdAt: '2020-02-01',
      writer: '잉글비',
    },
  ],
}

const mockMyReview = {
  id: 0,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  createdAt: '2020-01-01',
}

function getAllReviewsAPI({courtId, size, page}) {
  // const userApi = typeof window !== 'undefined'
  //  ? apiForServer
  //  : apiForLocal;
  
  const queryParams = getSearchQueries({
    courtId, 
    size,
    page,
  });
  return apiForLocal.get(
    `/review${queryParams}`, 
  );
}

function* getAllReviews(action) {
  try {
    const { data } = yield call(getAllReviewsAPI, action.payload);
    console.log(data);
    yield put(completeAllReviews(mockReviews));
  } catch (err) {
    console.error(err);
    put(failAllReviews(err));
  }
}

function* watchGetAllReviews() {
  yield takeLatest(
    LOAD_ALLREVIEWS_REQUEST,
    getAllReviews
  )
}

function getMyReviewAPI({ courtId }) {
  // const userApi = typeof window !== 'undefined'
  //  ? apiForServer
  //  : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  const queryParams = getSearchQueries({ courtId });
  console.log(`/review/mine${queryParams}`)
  return apiForLocal.get(
    `/review/mine${queryParams}`,
    axiosOptions
  );
}

function* getMyReview(action) {
  try {
    // const { data } = yield call(getMyReviewAPI, action.payload);
    // console.log(data);
    yield put(completeMyReview(mockMyReview));
  } catch (err) {
    console.error(err);
    put(failMyReview(err));
  }
}

function* watchGetMyReview() {
  yield takeLatest(
    LOAD_MYREVIEW_REQUEST,
    getMyReview
  )
}

function uploadReviewAPI({ courtId, text }) {
  // const userApi = typeof window !== 'undefined'
  //  ? apiForServer
  //  : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  const queryParams = getSearchQueries({ courtId });

  console.log(text);
  return apiForLocal.post(
    `/review${queryParams}`,
    {text},
    axiosOptions,
  );
}

function* uploadReview(action) {
  try {
    const { data } = yield call(uploadReviewAPI, action.payload);
    console.log(data);
    // yield put(completeUploadReview(mockMyReview));
  } catch (err) {
    console.error(err);
    put(failUploadReview(err));
  }
}

function* watchUploadReview() {
  yield takeLatest(
    UPLOAD_REVIEW_REQUEST,
    uploadReview
  )
}

export default function* userSaga() {
  yield all([
    fork(watchGetAllReviews),
    fork(watchGetMyReview),
    fork(watchUploadReview),
  ])
}