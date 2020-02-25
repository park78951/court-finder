import courtReducer from '../courtReducer';
import { searchInfo } from '../initialState'
import * as types from '@actions/types';
import * as mock from './mock';

describe('test courtReducer', () => {
  let searchState = {};

  it('should have the initial state', () => {
    searchState = courtReducer(undefined, {});
    expect(searchState).toEqual(searchInfo);
  });
  
  it('should request search courts', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SEARCH_COURTS_REQUEST,
      payload: {...mock.newInput1}
    });

    expect(searchState).toEqual({
      ...previousState,
      currentPage: 1,
      userInput: mock.newInput1.userInput,
      filterInput: {...mock.newInput1.filterInput},
      isSearching: true,
      isError: false,
    });
  });
  
  it(
    'should request search courts with empty string in properties in filterInput', 
    () => {
      const previousState = {...searchState};
      searchState = courtReducer(previousState, {
        type: types.SEARCH_COURTS_REQUEST,
        payload: {...mock.newInput2}
      });

      expect(searchState).toEqual({
        ...previousState,
        currentPage: mock.newInput2.page,
        userInput: mock.newInput1.userInput,
        filterInput: {city: '', district: ''},
        isSearching: true,
        isError: false,
      });
  });

  it('should get courts information', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SEARCH_COURTS_SUCCESS,
      payload: {
        ...mock.newCourtsData
      }
    });

    expect(searchState).toEqual({
      ...previousState,
      totalCourts: mock.newCourtsData.totalCourts,
      searchedCourts: [...mock.newCourtsData.courtsData],
      isSearching: false,
    });
  });

  it('should get error message without courts information', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SEARCH_COURTS_FAILURE,
      payload: mock.errorMessage,
    });

    expect(searchState).toEqual({
      ...previousState,
      isError: true,
      isSearching: false,
      searchedCourts: [],
      errorMessage: mock.errorMessage,
    });
  });

  it('should handle SELECT_COURT', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SELECT_COURT,
      payload: mock.selectedCourtsData,
    });

    expect(searchState).toEqual({
      ...previousState,
      selectedCourt: mock.selectedCourtsData,
    });
  });

  it('should handle UNSELECT_COURT', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.UNSELECT_COURT,
    });

    expect(searchState).toEqual({
      ...previousState,
      selectedCourt: null,
    });
  });

  it('should handle MOUSEOVER_LIST when mouse over list', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.MOUSEOVER_LIST,
      payload: mock.selectedCourtsData,
    });

    expect(searchState).toEqual({
      ...previousState,
      mouseoverList: mock.selectedCourtsData,
    });
  });

  it('should get filterInput', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.GET_FILTER_INPUT,
      payload: {...mock.newInput1.filterInput},
    });

    expect(searchState).toEqual({
      ...previousState,
      filterInput: {...mock.newInput1.filterInput},
    });
  });
});