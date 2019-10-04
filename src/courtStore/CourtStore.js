import React, { 
  createContext, 
  useState, 
  useEffect, 
  useReducer 
} from 'react';
// import { filterCourtsByInput } from '../myUtil';
// import courtsApi from '../apis';
import useFetch from '../helper/hooks/useFetch';
import courtReducer from '../helper/hooks/courtReducer';
import { initCourtsData, initUIToggleInfo } from '../config';

export const CourtContext = createContext();

const CourtStore = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [courtsData, courtsDataDispatch] = useReducer(courtReducer, initCourtsData);
  const [uiToggleInfo, uiToggleDispatch] = useReducer(courtReducer, initUIToggleInfo);
  const getUserInput = userInput => {
    setUserInput(userInput);
  };

  useEffect(() => {
    if(!userInput) return;
    useFetch({ userInput, courtsDataDispatch });
    setUserInput('');
  }, [userInput]);
  return (
    <CourtContext.Provider value={{ getUserInput, courtsData, ...uiToggleInfo, uiToggleDispatch }}>
      { children }
    </CourtContext.Provider>
  );
};



export default CourtStore;