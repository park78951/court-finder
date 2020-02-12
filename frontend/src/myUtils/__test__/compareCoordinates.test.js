import compareCoordinates from '../compareCoordinates';

describe('test compareCoordinates', () => {
  it('will be true when latitude and longitude in tow objects are same', () => {
    const coordinate1 = {longitude: '32.333333', latitude: '128.223345'};
    const coordinate2 = {longitude: '32.333333', latitude: '128.223345'};
    expect(compareCoordinates(coordinate1, coordinate2)).toBe(true);
  });

  it('will be false when latitude and longitude in tow objects are different', () => {
    const coordinate2 = {longitude: '32.333333', latitude: '128.223345'};
    const coordinate3 = {longitude: '16.233338', latitude: '111.345305'};
    const coordinate4 = {longitude: '32.333333', latitude: '105.742345'};
    const coordinate5 = {longitude: '16.233338', latitude: '128.223345'};

    expect(compareCoordinates(coordinate2, coordinate3)).toBe(false);
    expect(compareCoordinates(coordinate2, coordinate4)).toBe(false);
    expect(compareCoordinates(coordinate2, coordinate5)).toBe(false);
  });
});