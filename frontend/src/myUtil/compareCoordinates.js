const compareCoordinates = (courtInfo1, courtInfo2) => {
  if(!courtInfo1 || !courtInfo2) return false;
  
  const types = ['lat', 'lng'];
  const isSamePosition = types.every(type => courtInfo1[type] === courtInfo2[type]);
  
  return isSamePosition;
};

export default compareCoordinates;