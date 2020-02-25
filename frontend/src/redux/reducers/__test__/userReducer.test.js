import userReducer from '../userReducer';
import { userInfo } from '../initialState';
import * as types from '@actions/types';
import * as mock from './mock';

describe('test userRedcuer', () => {
  let userState = {};

  it('should get the initial state', () => {
    userState = userReducer(undefined, {});
    expect(userState).toEqual(userInfo);
  });

  it('should request user information', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.LOG_IN_REQUEST,
      payload: {
        userId: mock.userMock.userId,
      }
    });

    expect(userState).toEqual({
      ...previousState,
      isLogginIn: true,
      userId: mock.userMock.userId,
    });
  });

  it('should get user information', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.LOG_IN_SUCCESS,
      payload: {...mock.userMock},
    });

    expect(userState).toEqual({
      ...previousState,
      ...mock.userMock,
      isLogginIn: false,
      isLoggedIn: true,
    });
  });

  it('should get error message without user information', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.LOG_IN_FAILURE,
      payload: 'Cannot get user information',
    });

    expect(userState).toEqual({
      ...previousState,
      isLogginIn: false,
      errorMsg: 'Cannot get user information',
    });
  });

  it('should open and close user menu', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.TOGGLE_USER_MENU,
    });

    expect(userState).toEqual({
      ...previousState,
      isUserMenuOpen: !previousState.isUserMenuOpen,
    });

    userState = userReducer(previousState, {
      type: types.TOGGLE_USER_MENU,
    });

    expect(userState).toEqual({
      ...previousState,
      isUserMenuOpen: !previousState.isUserMenuOpen,
    });
  });

  it('should auto log in', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.AUTO_LOG_IN,
      payload: {
        userId: mock.userMock.userId,
        nickname: mock.userMock.nickname,
      },
    });

    expect(userState).toEqual({
      ...previousState,
      userId: mock.userMock.userId,
      nickname: mock.userMock.nickname,
      isLoggedIn: true,
    });
  });
});