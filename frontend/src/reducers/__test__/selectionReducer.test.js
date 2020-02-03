import selectionReducer from '../selectionReducer';
import { selectionInfo } from '../initialState'
import * as types from '@actions/types';
import * as mock from './mock';

describe('test selectionReducer', () => {
  let selectionState = {};

  it('should have the initial state', () => {
    selectionState = selectionReducer(undefined, {})
    expect(selectionState).toEqual(selectionInfo);
  });

  it('should handle SELECT_COURT', () => {
    const previousState = {...selectionState};
    selectionState = selectionReducer(previousState, {
      type: types.SELECT_COURT,
      payload: mock.selectedCourtsData,
    });

    expect(selectionState).toEqual({
      ...previousState,
      selectedCourt: mock.selectedCourtsData,
    });
  });

  it('should handle UNSELECT_COURT', () => {
    const previousState = {...selectionState};
    selectionState = selectionReducer(previousState, {
      type: types.UNSELECT_COURT,
    });

    expect(selectionState).toEqual({
      ...previousState,
      selectedCourt: null,
    });
  });

  it('should handle MOUSEOVER_LIST when mouse over list', () => {
    const previousState = {...selectionState};
    selectionState = selectionReducer(previousState, {
      type: types.MOUSEOVER_LIST,
      payload: mock.selectedCourtsData,
    });

    expect(selectionState).toEqual({
      ...previousState,
      mouseoverList: mock.selectedCourtsData,
    });
  });
})