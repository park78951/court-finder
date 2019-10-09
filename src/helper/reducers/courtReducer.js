import { 
  SEARCH_COURTS,
} from '../../config/constants';

const courtReducer = (state, { type, payload}) => {
  switch (type) {
    case SEARCH_COURTS:
      return [...payload];
    default:
      break;
  }
};

export default courtReducer;