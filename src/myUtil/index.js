export const filterCourtsByInput = ({ userInput, courtsInfo }) => {
  return courtsInfo.filter( courtInfo => {
    return courtInfo.locationName.includes(userInput);
  });
};