import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../../apis';
import { COMPLETE_SEARCH_COURTS, SEARCHING_COURTS } from '../../config/constants';


const fetchCourtsData = async ({ userInput, courtsDispatch }) => {
  try {
    courtsDispatch({
      type: SEARCHING_COURTS,
    });
    const fetchedData = await courtsApi.get('/seoulCourt.json');
    const courtsInfo = fetchedData.data.body;
    const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });
    courtsDispatch({ 
      type: COMPLETE_SEARCH_COURTS, 
      payload: courtsByUserInput 
    });
  } catch(err) {
    console.log(err);
  }
};

export default fetchCourtsData;