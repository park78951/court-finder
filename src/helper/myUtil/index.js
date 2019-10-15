export const filterCourtsByInput = ({ userInput, courtsInfo }) => {
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

export const convertCoordinatesNum = ({ lat, lng}) => {
  const numLat = Number(lat);
  const numLng = Number(lng);

  return { lat: numLat, lng: numLng };
};

export const createUniqueKey = () => {
  return Date.now() * Math.floor((Math.random() + 1) * 1000) + Date.now();
};

export const checkUnfilled = collection => {
  return Object.values(collection).every(val => val !== null);
};