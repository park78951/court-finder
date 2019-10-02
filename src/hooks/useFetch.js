import { useState, useEffect } from 'react';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../apis';


const fetchCourtsData = ({ userInput }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const fetchedData = await courtsApi.get('/location.json');
      const courtsInfo = fetchedData.data.body;
      const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });
      setData(courtsByUserInput);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userInput]);

  return data;
};

export default fetchCourtsData;