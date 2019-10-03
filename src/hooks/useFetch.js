// import { useState, useEffect } from 'react';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../apis';


const fetchCourtsData = ({ userInput, dispatch }) => {
  const fetchData = async () => {
    try {
      dispatch({ type: "SEARCH_COURTS_REQUEST" });
      const fetchedData = await courtsApi.get('/location.json');
      const courtsInfo = fetchedData.data.body;
      const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });
      dispatch({ type: "SEARCH_COURTS_SUCCESS", payload: courtsByUserInput });
      // setCourtsData(courtsByUserInput);
      // setIsLoaded(true);
    } catch(err) {
      console.log(err);
    }
  };

  fetchData();
};

export default fetchCourtsData;