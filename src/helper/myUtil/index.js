export const filterCourtsByInput = ({ userInput, courtsInfo }) => {
  return courtsInfo.filter( courtInfo => {
    return courtInfo.locationName.includes(userInput);
  });
};

export const createUniqueKey = () => {
  return Date.now() * Math.floor((Math.random() + 1) * 134) + Date.now();
};