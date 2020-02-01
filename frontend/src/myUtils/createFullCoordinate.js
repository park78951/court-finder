export default ({ latitude, longitude}) =>  {
  const numLat = Number(latitude);
  const numLng = Number(longitude);
  
  return { lat: numLat, lng: numLng };
};