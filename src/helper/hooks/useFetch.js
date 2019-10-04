// import { useState, useEffect } from 'react';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../../apis';
import {
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_SUCCESS
} from '../../config/constants';


const fetchCourtsData = ({ userInput, courtsDataDispatch }) => {
  const fetchData = async () => {
    try {
      courtsDataDispatch({ type: SEARCH_COURTS_REQUEST });
      const fetchedData = await courtsApi.get('/location.json');
      const courtsInfo = fetchedData.data.body;
      const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });
      courtsDataDispatch({ 
        type: SEARCH_COURTS_SUCCESS, 
        payload: courtsByUserInput 
      });
    } catch(err) {
      console.log(err);
    }
  };

  fetchData();
};

export default fetchCourtsData;