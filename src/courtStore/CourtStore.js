import React, { createContext, useState, useEffect, useReducer } from 'react';
// import { filterCourtsByInput } from '../myUtil';
// import courtsApi from '../apis';
import useFetch from '../hooks/useFetch';

export const CourtContext = createContext();

const courtReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_COURTS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage:null
      };
    case "SEARCH_COURTS_SUCCESS":
      return {
        ...state,
        loading: false,
        courtsInfo: action.payload
      };
    case "SEARCH_COURTS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      break;
  }
};

const CourtStore = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  // const [courtsData, setCourtsData] = useState('');
  const initialCourtsData = {
    loading: true,
    courtsInfo: [],
    errorMessage: null
  };
  const [courtsData, dispatch] = useReducer(courtReducer, initialCourtsData);
  // const [courtsData, dispatch] = useReducer(courtsReducer, []);

  const getUserInput = userInput => {
    setUserInput(userInput);
  };

  // const fetchData = async keyword => {
  //   if(!keyword) return;
  //   try {
  //     const fetchedData = await courtsApi.get('/location.json');
  //     const courtsInfo = fetchedData.data.body;
  //     const courtsByUserInput = filterCourtsByInput({ keyword, courtsInfo });
  //     setCourtsData(courtsByUserInput);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if(!userInput) return;
    useFetch({ userInput, dispatch });
    setUserInput('');
  }, [userInput]);

  return (
    <CourtContext.Provider value={{ getUserInput, courtsData }}>
      { children }
    </CourtContext.Provider>
  );
};



export default CourtStore;