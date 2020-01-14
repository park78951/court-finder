import { 
  SEARCH_COURTS_SUCCESS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_FAILURE,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION,
  TOGGLE_SIDEBAR,
  USER_INPUT,
  SEND_FILTER_INPUT,
  INIT_FILTER_INPUT,
  DELETE_COURTS,
  MOUSEOVER_LIST,
  UNSELECT_COURT,
} from './types';

export const startSearchingCourts = ({ userInput, filterInput, page }) => ({
  type: SEARCH_COURTS_REQUEST,
  payload: {
    userInput,
    filterInput,
    page
  }
});

export const completeSearchCourts = (totalCourts, courtsData) => ({
  type: SEARCH_COURTS_SUCCESS,
  payload: { totalCourts, courtsData },
});

export const catchErrorOnSearch = error => ({
  type: SEARCH_COURTS_FAILURE,
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
  type: USER_INPUT,
  payload: input,
});

export const getFilterInput = filterInput => ({
  type: SEND_FILTER_INPUT,
  payload: filterInput,
});

export const removeFilterInput = () => ({
  type: INIT_FILTER_INPUT,
});

export const getMouseOverList = mouseoverList => ({
  type: MOUSEOVER_LIST,
  payload: mouseoverList
});