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
  USER_INPUT
} from '../config/constants';
import { filterCourtsByInput } from '../helper/myUtil';
import courtsApi from '../apis';

export const searchingCourts = () => ({
  type: SEARCHING_COURTS,
});

export const catchErrorOnSearch = () => ({
  type: CATCHING_ERROR
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

export const openCourtAddtionForm = () => ({
  type: OPEN_COURTADDITION
});

export const closeCourtAddtionForm = () => ({
  type: CLOSE_COURTADDITION,
});

export const getUserInput = input => ({
  type: USER_INPUT,
  payload: input
});

export const searchCourts = userInput => 
  async dispatch => {
    try{
      dispatch(searchingCourts());

      const fetchedData = await courtsApi.get('/seoulCourt.json');
      const courtsInfo = fetchedData.data.body;
      const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });

      dispatch({
        type: COMPLETE_SEARCH_COURTS,
        payload: courtsByUserInput
      });
    } catch(err) {
      console.log(err.message);
      dispatch(catchErrorOnSearch());
    }
  };