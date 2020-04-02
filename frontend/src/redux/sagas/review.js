import { fork, put, takeLatest, call, all, select } from 'redux-saga/effects';
import { getSearchQueries } from '@myUtils';
import { apiForLocal, apiForServer } from '@apis';
import { 
  LOAD_ALLREVIEWS_REQUEST, 
  LOAD_MYREVIEW_REQUEST,
  UPLOAD_REVIEW_REQUEST,
  DELETE_MYREVIEW_REQUEST,
} from '@actions/types';
import { 
  completeAllReviews, 
  failAllReviews,
  completeMyReview,
  failMyReview,
  completeUploadReview,
  failUploadReview,
  completeDeletingMyReview,
  failDeletingMyReview,
  closeReviewDeleter,
} from '@actions';
import { requestSize } from '@config';

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
  try {
    const response = yield call(getAllReviewsAPI, {...payload, size: requestSize.reviews});

    if(response.status === 204) {
      yield put(completeAllReviews({
        hasMoreReviews: false,
        allReviews: [],
      }));
    }

    yield put(completeAllReviews(response.data));
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
  try {
    const response = yield call(getMyReviewAPI, payload);
    
    if(response.status === 204) {
      yield put(completeMyReview(null));
    }

    yield put(completeMyReview(response.data));
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

function getNickname({ user }) {
  return user.nickname;
}

function* uploadReview({ payload }) {
  try {
    const nickname = yield select(getNickname);
    const response = yield call(uploadReviewAPI, payload);
    yield put(completeUploadReview({
      ...response.data,
      nickname
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

function deleteReviewAPI({ reviewId }) {
  const userApi = typeof window !== 'undefined'
    ? apiForServer
    : apiForLocal;

  const axiosOptions = typeof window !== 'undefined'
    ? { withCredentials: true }
    : {};

  return userApi.delete(
    `/review/${reviewId}`,
    axiosOptions,
  );
}

function* deleteReview({ payload }) {
  try {
    yield call(deleteReviewAPI, payload);
    yield put(completeDeletingMyReview(payload));
    yield put(closeReviewDeleter());
  } catch (err) {
    console.error(err);
    put(failDeletingMyReview(err));
  }
}

function* watchDeleteReview() {
  yield takeLatest(
    DELETE_MYREVIEW_REQUEST,
    deleteReview
  );
}

export default function* userSaga() {
  yield all([
    fork(watchGetAllReviews),
    fork(watchGetMyReview),
    fork(watchUploadReview),
    fork(watchDeleteReview),
  ]);
}