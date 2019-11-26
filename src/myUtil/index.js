export const filterCourtsByInput = ({ 
  userInput, 
  courtsInfo, 
  filterData 
}) => {
  const filterDataKeys = Object.keys(filterData);
  let completeData = [];

  completeData = courtsInfo.filter( ({ locationName }) => {
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
    completeData = courtsInfo.filter( ({ gu_nm }) => {
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

export const createUniqueKey = () => {
  return (Date.now() * Math.floor((Math.random() + 1) * 10000))
    .toString(36).substr(2, 9);
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