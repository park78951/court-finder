import React, { 
  createContext, 
  useState, 
  useEffect, 
  useReducer 
} from 'react';
import useFetch from '../helper/hooks/useFetch';
import { courtReducer, uiReducer } from '../helper/reducers';
import { initCourtsInfo, initUIToggleInfo } from './initalState';

export const CourtContext = createContext();

const CourtStore = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [courtsInfo, courtsDispatch] = useReducer(courtReducer, initCourtsInfo);
  const [uiToggleInfo, uiToggleDispatch] = useReducer(uiReducer, initUIToggleInfo);
  
  const getUserInput = userInput => {
    setUserInput(userInput);
  };

  const fetchData = () => {
    useFetch({ userInput, courtsDispatch });
    if(!courtsInfo.isError) setUserInput('');
  };

  const refetchData = () => {
    fetchData();
  };

  useEffect(() => {
    if(!userInput) return;
    fetchData();
  }, [userInput]);
  
  return (
    <CourtContext.Provider value={{ 
      getUserInput, 
      ...courtsInfo,
      ...uiToggleInfo, 
      uiToggleDispatch,
      courtsDispatch,
      refetchData
    }}>
      { children }
    </CourtContext.Provider>
  );
};



export default CourtStore;