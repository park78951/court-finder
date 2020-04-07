import { 
  TOGGLE_SIDEBAR,
  CLOSE_NICKNAME_CHANGER,
  OPEN_NICKNAME_CHANGER,
  OPEN_ADD_REVIEW_FORM,
  CLOSE_ADD_REVIEW_FORM,
  TOGGLE_USER_MENU,
  CLOSE_USER_MENU,
  OPEN_DELETE_REVIEW_MODAL,
  CLOSE_DELETE_REVIEW_MODAL,
} from '@actions/types';
import { uiToggler } from './initialState';

const uiReducers = (state = uiToggler, { type }) => {
  switch(type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden
      };
    }

    case OPEN_NICKNAME_CHANGER: {
      return {
        ...state,
        isOpenNicknameChanger: true,
        isModalOpen: true,
      };
    }

    case CLOSE_NICKNAME_CHANGER:{
      return {
        ...state,
        isOpenNicknameChanger: false,
        isModalOpen: false,
      };
    }

    case OPEN_ADD_REVIEW_FORM: {
      return {
        ...state,
        isAddReviewFormOpen: true,
        isModalOpen: true,
      };
    }

    case CLOSE_ADD_REVIEW_FORM: {
      return {
        ...state,
        isAddReviewFormOpen: false,
        isModalOpen: false,
      };
    }
      
    case TOGGLE_USER_MENU: {
      return {
        ...state,
        isUserMenuOpen: !state.isUserMenuOpen,
      };  
    }
      
    case CLOSE_USER_MENU: {
      return {
        ...state,
        isUserMenuOpen: false,
      };  
    }
      
    case OPEN_DELETE_REVIEW_MODAL: {
      return {
        ...state,
        isDeleteReviewModalOpen: true,
        isModalOpen: true,
      };  
    }
      
    case CLOSE_DELETE_REVIEW_MODAL: {
      return {
        ...state,
        isDeleteReviewModalOpen: false,
        isModalOpen: false,
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