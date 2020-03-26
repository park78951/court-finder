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
  REMOVE_REVIEWS,
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
        isLoading: true,
      };

    case LOAD_ALLREVIEWS_SUCCESS: {
      return {
        ...state,
        allReviews: payload.allReviews,
        isLoading: false,
      };
    }

    case LOAD_ALLREVIEWS_FAILURE: {
      return {
        ...state,
        allReviewError: payload,
        isLoading: false,
      };
    }

    case LOAD_MYREVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_MYREVIEW_SUCCESS: {
      return {
        ...state,
        myReview: payload,
        isLoading: false,
      };
    }

    case LOAD_MYREVIEW_FAILURE: {
      return {
        ...state,
        myReviewError: payload,
        isLoading: false,
      };
    }

    case UPLOAD_REVIEW_REQUEST:{
      return {
        ...state,
        isLoading: true,
      };
    }

    case UPLOAD_REVIEW_SUCCESS: {
      return {
        ...state,
        myReview: payload,
        allReviews: [
          ...state.allReviews, 
          {
            id: payload.id,
            text: payload.text,
            createdAt: payload.createdAt, 
            writer: {nickname: payload.nickname }
          }
        ],
        isLoading: false,
      };
    }

    case UPLOAD_REVIEW_FAILURE: {
      return {
        ...state,
        uploadReviewError: payload,
        isLoading: false,
      };
    }

    case REMOVE_REVIEWS: {
      return {
        ...state,
        allReviews: [],
        myReview: null,
        isLoading: false,
        currentPage: 1,
        hasNextPage: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default uiReducers;