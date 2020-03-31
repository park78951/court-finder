import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import { getSearchQueries, cacheItem, getCacheKey } from '@myUtils';
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

const prevMyReview = {};
const prevAllReviews = {};

function getAllReviewsAPI({courtId, size, page}) {
  const userApi = typeof window !== 'undefined'
    ? apiForServer
    : apiForLocal;
  
  const queryParams = getSearchQueries({
    courtId, 
    size,
    page,
  });

  return userApi.get(
    `/review${queryParams}`, 
  );
}

function* getAllReviews({ payload }) {
  const cacheKey = getCacheKey(payload);
  console.log(payload);
  try {
    if(prevAllReviews.hasOwnProperty(cacheKey)) {
      yield put(completeAllReviews(prevAllReviews[cacheKey]));
    } else {
      const response = yield call(getAllReviewsAPI, payload);
  
      if(response.status === 204) return;
  
      yield put(completeAllReviews(response.data));
      cacheItem({
        cache: prevAllReviews,
        key: cacheKey,
        item: response.data,
      });
    }
  } catch (err) {
    console.error(err);
    put(failAllReviews(err));
  }
}

function* watchGetAllReviews() {
  yield takeLatest(
    LOAD_ALLREVIEWS_REQUEST,
    getAllReviews
  );
}

function getMyReviewAPI({ courtId }) {
  const userApi = typeof window !== 'undefined'
    ? apiForServer
    : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  const queryParams = getSearchQueries({ courtId });
  return userApi.get(
    `/review/mine${queryParams}`,
    axiosOptions
  );
}

function* getMyReview({ payload }) {
  const cacheKey = getCacheKey(payload);
  try {
    if(prevMyReview.hasOwnProperty(cacheKey)) {
      yield put(completeMyReview(prevMyReview[cacheKey]));
    } else {
      const response = yield call(getMyReviewAPI, payload);
      console.log(response);
      if(response.status === 204) return;
  
      yield put(completeMyReview(response.data));
      cacheItem({
        cache: prevMyReview,
        key: cacheKey,
        item: response.data,
      });
    }
  } catch (err) {
    console.error(err);
    put(failMyReview(err));
  }
}

function* watchGetMyReview() {
  yield takeLatest(
    LOAD_MYREVIEW_REQUEST,
    getMyReview
  );
}

function uploadReviewAPI({ courtId, text }) {
  const userApi = typeof window !== 'undefined'
    ? apiForServer
    : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  const queryParams = getSearchQueries({ courtId });

  console.log(queryParams);
  return userApi.post(
    `/review${queryParams}`,
    {text},
    axiosOptions,
  );
}

function* uploadReview({ payload }) {
  try {
    const response = yield call(uploadReviewAPI, payload);
    console.log(response);
    yield put(completeUploadReview({
      ...response.data,
      nickname: payload.nickname 
    }));
  } catch (err) {
    console.error(err);
    put(failUploadReview(err));
  }
}

function* watchUploadReview() {
  yield takeLatest(
    UPLOAD_REVIEW_REQUEST,
    uploadReview
  );
}

export default function* userSaga() {
  yield all([
    fork(watchGetAllReviews),
    fork(watchGetMyReview),
    fork(watchUploadReview),
  ]);
}