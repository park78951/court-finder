import { 
  OPEN_ADD_FORM,
  CLOSE_ADD_FORM,
  LOAD_ALLREVIEWS_REQUEST,
  LOAD_ALLREVIEWS_SUCCESS,
  LOAD_ALLREVIEWS_FAILURE,
  LOAD_MYREVIEW_REQUEST,
  LOAD_MYREVIEW_SUCCESS,
  LOAD_MYREVIEW_FAILURE,
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
      const { allReviews } = payload;
      console.log(allReviews);
      return {
        ...state,
        allReviews,
      }
    }

    default: 
      return state;
  }
};

export default uiReducers;