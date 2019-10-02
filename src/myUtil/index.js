export const filterCourtsByInput = ({ keyword, courtsInfo }) => {
  return courtsInfo.filter( courtInfo => {
    return courtInfo.locationName.includes(keyword);
  });
};