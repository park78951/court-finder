import { computeDistanceBetween } from 'spherical-geometry-js';
import createFullCoordinate from './createFullCoordinate';

const getDistanceBetweenTwo = (position1, position2) => {
  const distance = computeDistanceBetween(
    createFullCoordinate(position1),
    createFullCoordinate(position2),
  );
  
  return distance;
};

export const getFarthestCourts = (courts) => {
  const { farthestCourts } = courts.reduce((prevResult, courtInfo, idx, arr) => {
    if (idx === arr.length) return prevResult;

    let comparedCourts = {
      distance: 0,
      farthestCourts: [],
    };

    for(let i = idx + 1; i < arr.length; i++) {
      const distance = getDistanceBetweenTwo(courtInfo, arr[i]);

      if(comparedCourts.distance < distance) {
        comparedCourts.distance = distance;
        comparedCourts.farthestCourts = [courtInfo, arr[i]];
      }
    }
    
    return comparedCourts.distance < prevResult.distance 
      ? prevResult 
      : comparedCourts;
  }, {});
  
  return farthestCourts;
};

export default courts => {
  if (courts.length === 1) return createFullCoordinate(courts[0]);

  const farthestCourts = getFarthestCourts(courts);
  
  const centerPosition = farthestCourts.reduce((court1, court2) => {
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