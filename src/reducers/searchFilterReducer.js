import { initFilterInfo } from './initalState';
import { 
  ACTIVE_BUTTON
} from '../config/constants';

const searchFilterReducer = (state = initFilterInfo, { type, payload}) => {
  switch (type) {
    case ACTIVE_BUTTON:
      return {
        ...state,
        activeBtn: payload
      };
      
    default:
      return state;
  }
};

export default searchFilterReducer;