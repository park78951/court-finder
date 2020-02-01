import { selectionInfo } from './initialState';
import { 
  SELECT_COURT,
  MOUSEOVER_LIST,
  UNSELECT_COURT,
} from '../actions/types';

const selectionReducer = (state = selectionInfo, { type, payload}) => {
  switch (type) { 
    case SELECT_COURT:
      const selectedCourt = payload ? { ...payload } : null;
      return {
        ...state,
        selectedCourt,
      };

    case UNSELECT_COURT:
      return {
        ...state,
        selectedCourt: null,
      };

    case MOUSEOVER_LIST:
      const mouseoverList = payload ? { ...payload } : null;
      return {
        ...state,
        mouseoverList,
      };

    default:
      return {
        ...state
      };
  }
};

export default selectionReducer;