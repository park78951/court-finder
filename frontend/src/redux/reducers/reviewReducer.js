import { 
  OPEN_ADD_FORM,
  CLOSE_ADD_FORM,
  LOAD_ALLREVIEWS_REQUEST,
  LOAD_ALLREVIEWS_SUCCESS,
  LOAD_ALLREVIEWS_FAILURE,
  LOAD_MYREVIEW_REQUEST,
  LOAD_MYREVIEW_SUCCESS,
  LOAD_MYREVIEW_FAILURE,
  UPLOAD_REVIEW_REQUEST,
  UPLOAD_REVIEW_SUCCESS,
  UPLOAD_REVIEW_FAILURE,
} from '@actions/types';
import { initPosts } from './initialState';

const uiReducers = (state = initPosts, { type, payload }) => {
  switch(type) {
    case OPEN_ADD_FORM:
      return {
        ...state,
        isAddFormOpen: true,
      };

    case CLOSE_ADD_FORM:
      return {
        ...state,
        isAddFormOpen: false,
      };

    case LOAD_ALLREVIEWS_REQUEST:
      return {
        ...state,
      }

    case LOAD_ALLREVIEWS_SUCCESS: {
      return {
        ...state,
        allReviews: payload.allReviews,
      }
    }

    case LOAD_ALLREVIEWS_FAILURE: {
      return {
        ...state,
        allReviewError: payload,
      }
    }

    case LOAD_MYREVIEW_REQUEST:
      return {
        ...state,
      }

    case LOAD_MYREVIEW_SUCCESS: {
      return {
        ...state,
        myReview: payload,
      }
    }

    case LOAD_MYREVIEW_FAILURE: {
      return {
        ...state,
        myReviewError: payload,
      }
    }

    case UPLOAD_REVIEW_REQUEST:
      return state;

    case UPLOAD_REVIEW_SUCCESS: {
      return {
        ...state,
        myReview: payload,
      }
    }

    case UPLOAD_REVIEW_FAILURE: {
      return {
        ...state,
        uploadReviewError: payload,
      }
    }

    default: 
      return state;
  }
};

export default uiReducers;