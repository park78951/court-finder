const filterCourtsByInput = ({ 
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

export default filterCourtsByInput;