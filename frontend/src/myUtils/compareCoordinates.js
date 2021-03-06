const compareCoordinates = (courtInfo1, courtInfo2) => {
  if(!courtInfo1 || !courtInfo2) return false;

  if(
    !courtInfo1.hasOwnProperty('latitude') || !courtInfo2.hasOwnProperty('longitude')
  ) return false;
  
  const types = ['latitude', 'longitude'];
  const isSamePosition = types.every(type => courtInfo1[type] === courtInfo2[type]);

  return isSamePosition;
};

export default compareCoordinates;