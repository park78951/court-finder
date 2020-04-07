import courtReducer from '../courtReducer';
import { courtState } from '../initialState';
import * as types from '@actions/types';
import * as mock from './mock';

describe('test courtReducer', () => {
  let testCourtState = {};

  it('should have the initial state', () => {
    testCourtState = courtReducer(undefined, {});
    expect(testCourtState).toEqual(courtState);
  });
  
  it(
    'should change states to request search courts for the first time', 
    () => {
      testCourtState = courtReducer(testCourtState, {
        type: types.SEARCH_COURTS_REQUEST,
        payload: {...mock.newInput2}
      });

      expect(testCourtState).toEqual({
        ...testCourtState,
        currentPage: mock.newInput2.page,
        userInput: mock.newInput1.userInput,
        filterInput: {city: '', district: ''},
        isSearching: true,
        isError: false,
      });
    });

  it('should change states to get courts information', () => {
    testCourtState = courtReducer(testCourtState, {
      type: types.SEARCH_COURTS_SUCCESS,
      payload: {
        ...mock.newCourtsData
      }
    });

    expect(testCourtState).toEqual({
      ...testCourtState,
      totalCourts: mock.newCourtsData.totalCourts,
      searchedCourts: [...mock.newCourtsData.courtsData],
      isSearching: false,
    });
  });

  it('should change states to get error message', () => {
    testCourtState = courtReducer(testCourtState, {
      type: types.SEARCH_COURTS_FAILURE,
      payload: mock.errorMessage,
    });

    expect(testCourtState).toEqual({
      ...testCourtState,
      isError: true,
      isSearching: false,
      searchedCourts: [],
      errorMessage: mock.errorMessage,
    });
  });

  it('should change states to handle SELECT_COURT', () => {
    testCourtState = courtReducer(testCourtState, {
      type: types.SELECT_COURT,
      payload: mock.selectedCourtsData,
    });

    expect(testCourtState).toEqual({
      ...testCourtState,
      selectedCourt: mock.selectedCourtsData,
    });
  });

  it('should change states to show data when mouse over list', () => {
    testCourtState = courtReducer(testCourtState, {
      type: types.MOUSEOVER_LIST,
      payload: mock.selectedCourtsData,
    });

    expect(testCourtState).toEqual({
      ...testCourtState,
      mouseoverList: mock.selectedCourtsData,
    });
  });

  it('should change states to get filter input', () => {
    testCourtState = courtReducer(testCourtState, {
      type: types.GET_FILTER_INPUT,
      payload: {...mock.newInput1.filterInput},
    });

    expect(testCourtState).toEqual({
      ...testCourtState,
      filterInput: {...mock.newInput1.filterInput},
    });
  });

  it('should change states to initialize filter input', () => {
    testCourtState = courtReducer(testCourtState, {
      type: types.GET_FILTER_INPUT,
      payload: {...mock.newInput1.filterInput},
    });

    expect(testCourtState).toEqual({
      ...testCourtState,
      filterInput: {...mock.newInput1.filterInput},
    });
  });
});