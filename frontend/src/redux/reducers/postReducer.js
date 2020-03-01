import { 
  OPEN_ADD_FORM,
  CLOSE_ADD_FORM,
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

    default: 
      return state;
  }
};

export default uiReducers;