import { computeDistanceBetween } from 'spherical-geometry-js';
import createFullCoordinate from './createFullCoordinate';

const getDistanceBetweenTwo = (position1, position2) => {
  const distance = computeDistanceBetween(
    createFullCoordinate(position1),
    createFullCoordinate(position2),
  );

  return distance;
};

const getFarthestCourts = (courts) => {
  const courtsForm = {
    distance: 0,
    courtInfo: [],
  };

  const farthestCourts = courts.reduce((courts, courtInfo, idx, arr) => {
    if (idx + 1 === arr.length) return courts;

    const distance = getDistanceBetweenTwo(courtInfo, arr[idx + 1]);
    
    return distance < courts.distance 
      ? courts 
      : {
        distance,
        courtInfo: [courtInfo, arr[idx + 1]],
      };
  }, courtsForm);
  
  return farthestCourts;
};

export default courts => {
  if (courts.length === 1) return createFullCoordinate(courts[0]);

  const { courtInfo } = getFarthestCourts(courts);
  
  const centerPosition = courtInfo.reduce((court1, court2) => {
    const court1Position = createFullCoordinate(court1);
    const court2Position = createFullCoordinate(court2);
    const lngBenchmark = Math.max(court1Position.lng, court2Position.lng);
    const latBenchmark = Math.max(court1Position.lat, court2Position.lat);
    
    const lngDiff = Math.abs(court1Position.lng - court2Position.lng)/2;
    const latDiff = Math.abs(court1Position.lat - court2Position.lat)/2;
    
    const lng = lngBenchmark - lngDiff;
    const lat = latBenchmark - latDiff;
    
    return { lng, lat };
  });

  return centerPosition;
};