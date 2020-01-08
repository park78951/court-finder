const createFullCoordinate = ({ lat, lng}) =>  {
  const numLat = Number(lat);
  const numLng = Number(lng);
  return { lat: numLat, lng: numLng };
};

export default createFullCoordinate;