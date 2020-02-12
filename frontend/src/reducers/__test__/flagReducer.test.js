import flagReducer from '../flagReducer';
import { initUIToggleInfo } from '../initialState'
import * as types from '@actions/types';

describe('test flagReducer', () => {
  let flagState = {};

  it('should have the initial state', () => {
    flagState = flagReducer(undefined, {})
    expect(flagState).toEqual(initUIToggleInfo);
  });

  it('should handle TOGGLE_SIDEBAR', () => {
    const previousState = {...flagState};
    flagState = flagReducer(previousState, {
      type: types.TOGGLE_SIDEBAR,
    });

    expect(flagState).toEqual({
      ...previousState,
      isSidebarHidden: !previousState.isSidebarHidden
    });
  });

  it('should handle OPEN_COURTADDITION', () => {
    const previousState = {...flagState};
    flagState = flagReducer(previousState, {
      type: types.OPEN_COURTADDITION,
    });

    expect(flagState).toEqual({
      ...previousState,
      courtAdditionFlag: true,
    });
  });

  it('should handle INIT_FILTER_INPUT', () => {
    const previousState = {...flagState};
    flagState = flagReducer(previousState, {
      type: types.CLOSE_COURTADDITION,
    });

    expect(flagState).toEqual({
      ...previousState,
      courtAdditionFlag: false,
    });
  });
})