import { 
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_FAILURE,
  SEARCH_COURT_SUCCESS,
  SEARCH_COURT_REQUEST,
  SEARCH_COURT_FAILURE,
  ADD_COURTS,
  SELECT_COURT,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION,
  TOGGLE_SIDEBAR,
  GET_SEARCH_INPUT,
  GET_FILTER_INPUT,
  INIT_FILTER_INPUT,
  DELETE_COURTS,
  MOUSEOVER_LIST,
  UNSELECT_COURT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  OPEN_NICKNAME_CHANGER,
  CLOSE_NICKNAME_CHANGER,
} from './types';

export const requestCourts = ({ userInput, filterInput, page }) => ({
  type: SEARCH_COURTS_REQUEST,
  payload: {
    userInput,
    city: filterInput.city ? filterInput.city : '',
    district: filterInput.district ? filterInput.district : '',
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

export const deleteSearchedCourts = () => ({
  type: DELETE_COURTS,
});

export const addCourts = addedInfo => ({
  type: ADD_COURTS,
  payload: addedInfo,
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

export const openCourtAddtionForm = () => ({
  type: OPEN_COURTADDITION,
});

export const closeCourtAddtionForm = () => ({
  type: CLOSE_COURTADDITION,
});

export const getUserInput = input => ({
  type: GET_SEARCH_INPUT,
  payload: input,
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

export const succeedLogin = ({ nickname, userId }) => ({
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

export const openNicknameChanger = () => ({
  type: OPEN_NICKNAME_CHANGER,
});

export const closeNicknameChanger = () => ({
  type: CLOSE_NICKNAME_CHANGER,
});