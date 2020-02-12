import { getFarthestCourts } from '../getCenterPosition';

test('it should get farthest courts', () => {
  const coordinate1 = {longitude: '11.333333', latitude: '128.223345'};
  const coordinate2 = {longitude: '16.233338', latitude: '128.223345'};
  const coordinate3 = {longitude: '32.233338', latitude: '128.223345'};
  const coordinate4 = {longitude: '32.233338', latitude: '70.223345'};
  const coordinate5 = {longitude: '32.233338', latitude: '1.223345'};

  const testCase1 = [
    coordinate1,
    coordinate2,
    coordinate3,
  ];

  const testCase2 = [
    coordinate3,
    coordinate4,
    coordinate5,
  ];

  const testCase3 = [
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
  ];

  expect(getFarthestCourts(testCase1)).toEqual([coordinate1, coordinate3]);

  expect(getFarthestCourts(testCase2)).toEqual([coordinate3, coordinate5]);

  expect(getFarthestCourts(testCase3)).toEqual([coordinate3, coordinate5]);
});