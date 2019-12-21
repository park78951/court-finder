export const filterCourtsByInput = ({ 
  userInput, 
  courtsData, 
  filterData 
}) => {
  const filterDataKeys = Object.keys(filterData);
  let completeData = [];

  completeData = courtsData.filter( ({ locationName }) => {
    return locationName.includes(userInput);
  });

  
  if(filterDataKeys.length) {
    filterDataKeys.forEach(dataKeys => {
      completeData = completeData.filter(dataUnit => {
        return dataUnit[dataKeys] === filterData[dataKeys];
      });
    });
  }

  if(!completeData.length) {
    completeData = courtsData.filter( ({ gu_nm }) => {
      return gu_nm.includes(userInput);
    });
  }

  return completeData;
};

export const createFullCoordinate = ({ lat, lng}) => {
  const numLat = Number(lat);
  const numLng = Number(lng);
  return { lat: numLat, lng: numLng };
};

export const checkUnfilled = collection => {
  return Object.values(collection).every(val => val);
};

export const storeKeywords = (keywordType, state, setState) => (
  ({ target }) => {
    const value = target.value === '선택해주세요' ? '' : target.value;
    
    setState({
      ...state,
      [keywordType]: value
    });
  }
);

export const deleteObjProps = obj => {
  const duplicateObj = {...obj};
  const objectKeys = Object.keys(obj);
  
  objectKeys.forEach(objKey => {
    if(!duplicateObj[objKey]) delete duplicateObj[objKey];
  });

  return duplicateObj;
};

const keyGenerator = () => {
  let increasingNum = 0;
  return (data) => {
    increasingNum++;
    return `${data}_${Date.now()}_${increasingNum}`;
  };
};

export const keyMaker = keyGenerator();