import { 
  COMPLETE_SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCHING_COURTS,
  REMOVE_SELECT_COURT,
  CATCHING_ERROR,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION,
  TOGGLE_SIDEBAR,
  USER_INPUT,
  TOGGLE_FILTER,
  ACTIVE_BUTTON,
  SEND_FILTER_DATA,
  INIT_FILTER_DATA,
  DELETE_COURTS
} from '../config/constants';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../apis';

const startSearchingCourts = () => ({
  type: SEARCHING_COURTS,
});

export const catchErrorOnSearch = () => ({
  type: CATCHING_ERROR
});

export const deleteSearchedCourts = () => ({
  type: DELETE_COURTS
});

export const addCourts = addedInfo => ({
  type: ADD_COURTS,
  payload: addedInfo
});

export const selectCourt = selectedCourt => ({
  type: SELECT_COURT,
  payload: selectedCourt
});

export const removeSelectedCourt = () => ({
  type: REMOVE_SELECT_COURT
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: isOpen
});

export const openCourtAddtionForm = () => ({
  type: OPEN_COURTADDITION
});

export const closeCourtAddtionForm = () => ({
  type: CLOSE_COURTADDITION,
});

const getUserInput = input => ({
  type: USER_INPUT,
  payload: input
});

export const getActiveBtnName = btnName => ({
  type: ACTIVE_BUTTON,
  payload: btnName
});

export const getFilterData = filterData => ({
  type: SEND_FILTER_DATA,
  payload: filterData
});

export const removeFilterData = () => ({
  type: INIT_FILTER_DATA
});

export const searchCourts = (userInput, filteredData) => 
  async dispatch => {
    dispatch(getUserInput(userInput));
    try{
      dispatch(startSearchingCourts());

      const fetchedData = await courtsApi.get('/seoulCourt.json');
      const courtsInfo = fetchedData.data.body;
      let courtsByUserInput = filterCourtsByInput({ 
        userInput, 
        courtsInfo, 
        filteredData 
      });
      dispatch({
        type: COMPLETE_SEARCH_COURTS,
        payload: courtsByUserInput
      });
    } catch(err) {
      console.log(err.message);
      dispatch(catchErrorOnSearch());
    }
  };