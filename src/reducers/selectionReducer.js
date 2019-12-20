import { selectionInfo } from './initalState';
import { 
  SELECT_COURT,
} from '../actions/types';

const selectionReducer = (state = selectionInfo, { type, payload}) => {
  switch (type) { 
    case SELECT_COURT: 
      return {
        ...state,
        selectedCourt: { ...payload }
      };

    default:
      return state;
  }
};

export default selectionReducer;