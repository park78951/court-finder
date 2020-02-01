import { additionInfo } from './initialState';
import { ADD_COURTS } from '../actions/types';

const additionReducer = (state = additionInfo, { type, payload}) => {
  switch (type) {
    case ADD_COURTS:
      return {
        ...state,
        addedInfo: { ...state.addedInfo, ...payload }
      };
      
    default:
      return state;
  }
};

export default additionReducer;