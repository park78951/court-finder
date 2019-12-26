import { selectionInfo } from './initalState';
import { 
  SELECT_COURT,
  LIST_OVER_COURT,
  LIST_OUT_COURT,
} from '../actions/types';

const selectionReducer = (state = selectionInfo, { type, payload}) => {
  switch (type) { 
    case SELECT_COURT: 
      return {
        ...state,
        selectedCourt: { ...payload }
      };

    case LIST_OVER_COURT:
      return {
        ...state,
        listOverCourt: { ...payload },
      };

    case LIST_OUT_COURT:
      return {
        ...state,
        listOverCourt: null,
      };

    default:
      return {
        ...state
      };
  }
};

export default selectionReducer;