import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../../apis';
import { SEARCH_COURTS } from '../../config/constants';


const fetchCourtsData = async ({ userInput, courtsInfoDispatch }) => {
  try {
    const fetchedData = await courtsApi.get('/seoulCourt.json');
    const courtsInfo = fetchedData.data.body;
    const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });
    courtsInfoDispatch({ 
      type: SEARCH_COURTS, 
      payload: courtsByUserInput 
    });
  } catch(err) {
    console.log(err);
  }
};

export default fetchCourtsData;