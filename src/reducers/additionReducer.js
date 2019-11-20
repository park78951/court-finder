import { additionInfo } from './initalState';
import { ADD_COURTS } from '../config/constants';

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