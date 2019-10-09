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
  const [addedCourts, setAddedCourts] = useState([]);
  const [courtsInfo, courtsInfoDispatch] = useReducer(courtReducer, initCourtsInfo);
  const [uiToggleInfo, uiToggleDispatch] = useReducer(uiReducer, initUIToggleInfo);
  const getUserInput = userInput => {
    setUserInput(userInput);
  };

  const addCourt = submitList => {
    const copiedList = { ...submitList };
    setAddedCourts({
      ...addedCourts,
      copiedList
    });
  };

  useEffect(() => {
    if(!userInput) return;
    useFetch({ userInput, courtsInfoDispatch });
    setUserInput('');
  }, [userInput]);
  
  return (
    <CourtContext.Provider value={{ 
      getUserInput, 
      courtsInfo, 
      ...uiToggleInfo, 
      uiToggleDispatch,
      addCourt
    }}>
      { children }
    </CourtContext.Provider>
  );
};



export default CourtStore;