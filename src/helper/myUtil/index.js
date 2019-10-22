const filterCourtsByInput = ({ userInput, courtsInfo }) => {
  let filteredData = [];
  filteredData = courtsInfo.filter( ({ locationName }) => {
    return locationName.includes(userInput);
  });

  if(!filteredData.length) {
    filteredData = courtsInfo.filter( ({ gu_nm }) => {
      return gu_nm.includes(userInput);
    });
  }

  return filteredData;
};

const convertCoordinatesNum = ({ lat, lng}) => {
  const numLat = Number(lat);
  const numLng = Number(lng);

  return { lat: numLat, lng: numLng };
};

const createUniqueKey = () => {
  return (Date.now() * Math.floor((Math.random() + 1) * 10000)).toString(36).substr(2, 9);
};

const checkUnfilled = collection => {
  return Object.values(collection).every(val => val);
};

export {
  filterCourtsByInput,
  convertCoordinatesNum,
  createUniqueKey,
  checkUnfilled
};