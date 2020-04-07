import { 
  LOAD_ALLREVIEWS_REQUEST,
  LOAD_ALLREVIEWS_SUCCESS,
  LOAD_ALLREVIEWS_FAILURE,
  LOAD_MYREVIEW_REQUEST,
  LOAD_MYREVIEW_SUCCESS,
  LOAD_MYREVIEW_FAILURE,
  UPLOAD_REVIEW_REQUEST,
  UPLOAD_REVIEW_SUCCESS,
  UPLOAD_REVIEW_FAILURE,
  EMPTY_REVIEWS,
  DELETE_MYREVIEW_REQUEST,
  DELETE_MYREVIEW_SUCCESS,
  DELETE_MYREVIEW_FAILURE,
} from '@actions/types';
import { reviewState } from './initialState';

const uiReducers = (state = reviewState, { type, payload }) => {
  switch(type) {
    case LOAD_ALLREVIEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_ALLREVIEWS_SUCCESS: {
      const { hasMoreReviews, allReviews } = payload;
      
      return {
        ...state,
        allReviews: [...state.allReviews, ...allReviews],
        hasMoreReviews,
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
        isLoading: false,
        allReviews: state.hasMoreReviews 
          ? state.allReviews 
          : [...state.allReviews, payload]
      };
    }

    case UPLOAD_REVIEW_FAILURE: {
      return {
        ...state,
        isLoading: false,
        uploadReviewError: payload,
      };
    }

    case DELETE_MYREVIEW_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DELETE_MYREVIEW_SUCCESS: {
      const filteredReviews = state.allReviews
        .filter((review) => {
          return review.id !== payload;
        });

      return {
        ...state,
        isLoading: false,
        myReview: null,
        allReviews: filteredReviews,
      };
    }

    case DELETE_MYREVIEW_FAILURE: {
      return {
        ...state,
        isLoading: false,
        deleteReviewError: payload
      };
    }

    case EMPTY_REVIEWS: {
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
      return {
        ...state
      };
    }
  }
};

export default uiReducers;