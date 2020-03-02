import { 
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_FAILURE,
  SEARCH_COURT_SUCCESS,
  SEARCH_COURT_REQUEST,
  SEARCH_COURT_FAILURE,
  SELECT_COURT,
  TOGGLE_SIDEBAR,
  GET_FILTER_INPUT,
  INIT_FILTER_INPUT,
  MOUSEOVER_LIST,
  UNSELECT_COURT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  AUTO_LOG_IN,
  OPEN_NICKNAME_CHANGER,
  CLOSE_NICKNAME_CHANGER,
  TOGGLE_USER_MENU,
  OPEN_ADD_FORM,
  CLOSE_ADD_FORM,
  LOAD_ALLREVIEWS_REQUEST,
  LOAD_ALLREVIEWS_SUCCESS,
  LOAD_ALLREVIEWS_FAILURE,
  LOAD_MYREVIEW_REQUEST,
  LOAD_MYREVIEW_SUCCESS,
  LOAD_MYREVIEW_FAILURE,
} from './types';

export const requestCourts = ({ userInput, filterInput, page }) => ({
  type: SEARCH_COURTS_REQUEST,
  payload: {
    userInput,
    filterInput,
    page
  }
});

export const completeGettingCourts = ({ totalCourts, courtsData }) => ({
  type: SEARCH_COURTS_SUCCESS,
  payload: { totalCourts, courtsData },
});

export const failGettingCourts = error => ({
  type: SEARCH_COURTS_FAILURE,
  payload: error,
});

export const requestCourt = (id) => ({
  type: SEARCH_COURT_REQUEST,
  payload: id,
});

export const completeGettingCourt = ({ courtData }) => ({
  type: SEARCH_COURT_SUCCESS,
  payload: courtData,
});

export const failGettingCourt = error => ({
  type: SEARCH_COURT_FAILURE,
  payload: error,
});

export const selectCourt = selectedCourt => ({
  type: SELECT_COURT,
  payload: selectedCourt,
});

export const unselectCourt = () => ({
  type: UNSELECT_COURT,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const getFilterInput = filterInput => ({
  type: GET_FILTER_INPUT,
  payload: filterInput,
});

export const removeFilterInput = () => ({
  type: INIT_FILTER_INPUT,
});

export const getMouseOverList = mouseoverList => ({
  type: MOUSEOVER_LIST,
  payload: mouseoverList
});

export const requestLogin = (payload) => ({
  type: LOG_IN_REQUEST,
  payload,
});

export const completeLogin = ({ nickname, userId }) => ({
  type: LOG_IN_SUCCESS,
  payload: {
    nickname,
    userId
  },
});

export const failLogin = (payload) => ({
  type: LOG_IN_FAILURE,
  payload,
});

export const requestLogout = () => ({
  type: LOG_OUT_REQUEST,
});

export const completeLogout = () => ({
  type: LOG_OUT_SUCCESS,
});

export const failLogout = (payload) => ({
  type: LOG_OUT_FAILURE,
  payload,
});

export const autoLogin = ({ kakaoId, nickname }) => ({
  type: AUTO_LOG_IN,
  payload: {
    userId: kakaoId,
    nickname,
  },
});

export const openNicknameChanger = () => ({
  type: OPEN_NICKNAME_CHANGER,
});

export const closeNicknameChanger = () => ({
  type: CLOSE_NICKNAME_CHANGER,
});

export const toggleUserMenu = () => ({
  type: TOGGLE_USER_MENU,
});

export const openAddReviewForm = () => ({
  type: OPEN_ADD_FORM,
});

export const closeAddReviewForm = () => ({
  type: CLOSE_ADD_FORM,
});

export const requestAllReviews = ({ courtId, size, page }) => ({
  type: LOAD_ALLREVIEWS_REQUEST,
  payload: {courtId, size, page},
});

export const completeAllReviews = ({ hasNextPage, reviews }) => ({
  type: LOAD_ALLREVIEWS_SUCCESS,
  payload: {
    hasNextPage, 
    allReviews: reviews
  },
});

export const failAllReviews = ({ errorMsg }) => ({
  type: LOAD_ALLREVIEWS_FAILURE,
  payload: errorMsg,
});

export const requestMyReview = ({ courtId }) => ({
  type: LOAD_MYREVIEW_REQUEST,
  payload: {courtId},
});

export const completeMyReview = ({ text, createdAt }) => ({
  type: LOAD_MYREVIEW_SUCCESS,
  payload: {
    text,
    createdAt,
  },
});

export const failMyReview = ({ errorMsg }) => ({
  type: LOAD_MYREVIEW_FAILURE,
  payload: errorMsg,
});