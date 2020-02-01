export default ({ 
  userInput, 
  courtsData, 
  filterInput 
}) => {
  const filterInputKeys = Object.keys(filterInput);
  let completeData = [];

  completeData = courtsData.filter( ({ locationName }) => {
    return locationName.includes(userInput);
  });

  
  if(filterInputKeys.length) {
    filterInputKeys.forEach(dataKeys => {
      completeData = completeData.filter(dataUnit => {
        return dataUnit[dataKeys] === filterInput[dataKeys];
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
