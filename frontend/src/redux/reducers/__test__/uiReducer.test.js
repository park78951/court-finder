import uiReducer from '../uiReducer';
import { uiToggler } from '../initialState';
import * as types from '@actions/types';

describe('test uiReducer', () => {
  let uiControllerState = {};

  it('should have the initial state', () => {
    uiControllerState = uiReducer(undefined, {});
    expect(uiControllerState).toEqual(uiToggler);
  });

  it('should change states to handle TOGGLE_SIDEBAR', () => {
    const isSidebarHidden = uiControllerState.isSidebarHidden;

    uiControllerState = uiReducer(uiControllerState, {
      type: types.TOGGLE_SIDEBAR,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isSidebarHidden: !isSidebarHidden
    });
  });

  it('should change states to open nickname changer', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.OPEN_NICKNAME_CHANGER,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isOpenNicknameChanger: true,
      isModalOpen: true,
    });
  });

  it('should change states to close nickname changer', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.CLOSE_NICKNAME_CHANGER,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isOpenNicknameChanger: false,
      isModalOpen: false,
    });
  });

  it('should change states to open review addition form', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.OPEN_ADD_REVIEW_FORM,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isAddReviewFormOpen: true,
      isModalOpen: true,
    });
  });

  it('should change states to close review addition form', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.CLOSE_ADD_REVIEW_FORM,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isAddReviewFormOpen: false,
      isModalOpen: false,
    });
  });

  it('should change states to toggle user menu', () => {
    const isUserMenuOpen = uiControllerState.isUserMenuOpen;

    uiControllerState = uiReducer(uiControllerState, {
      type: types.TOGGLE_USER_MENU,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isUserMenuOpen: !isUserMenuOpen,
    });
  });

  it('should change states to close user menu', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.TOGGLE_USER_MENU,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isUserMenuOpen: false,
    });
  });

  it('should change states to open modal to delete review', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.OPEN_DELETE_REVIEW_MODAL,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isDeleteReviewModalOpen: true,
      isModalOpen: true,
    });
  });

  it('should change states to close modal to delete review', () => {
    uiControllerState = uiReducer(uiControllerState, {
      type: types.CLOSE_DELETE_REVIEW_MODAL,
    });

    expect(uiControllerState).toEqual({
      ...uiControllerState,
      isDeleteReviewModalOpen: false,
      isModalOpen: false,
    });
  });
});