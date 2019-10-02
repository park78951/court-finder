import React, { createContext, useState } from 'react';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../apis';

export const CourtContext = createContext();

const CourtStore = ({ children }) => {
  // const [userInput, setUserInput] = useState('');
  const [courtsData, setCourtsData] = useState('');
  // const [courtsData, dispatch] = useReducer(courtsReducer, []);

  const getUserInput = userInput => {
    fetchData(userInput);
  };

  const fetchData = async keyword => {
    if(!keyword) return;
    try {
      const fetchedData = await courtsApi.get('/location.json');
      const courtsInfo = fetchedData.data.body;
      const courtsByUserInput = filterCourtsByInput({ keyword, courtsInfo });
      setCourtsData(courtsByUserInput);
    } catch(err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if(!userInput) return;
  //   const fetchedData = useFetch({ userInput });
  //   setCourtsData(fetchedData);
  // }, [userInput]);

  return (
    <CourtContext.Provider value={{ getUserInput, courtsData }}>
      { children }
    </CourtContext.Provider>
  );
};

export default CourtStore;