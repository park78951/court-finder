import getBytesFromString from '../getBytesFromString';

describe('test getBytesFromString', () => {
  it('should get the same result with the length of the string', () => {
    const shortName = 'Anold';
    const longName = 'KingLebronJames';

    expect(getBytesFromString(shortName)).toBe(shortName.length);
    expect(getBytesFromString(longName)).toBe(longName.length);
  });

  it('should get the right result for strings in Korean', () => {
    const shortName = '다람쥐';
    const longName = '노래를한다람쥐가나무를올라';

    expect(getBytesFromString(shortName)).toBe(9);
    expect(getBytesFromString(longName)).toBe(39);
  });
})