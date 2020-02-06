import createFullCoordinate from '../createFullCoordinate';

test('test createFullCoordinate', () => {
  const coordinate1 = {
    longitude: '32.333333', 
    latitude: '128.223345', 
    testCoordinate: '123.34324',
    text: 'test'
  };

  expect(createFullCoordinate(coordinate1)).toEqual({ lng: 32.333333, lat: 128.223345 });
});