import checkValidString from '../checkValidString';

describe('test checkValidString', () => {
  it(
    'should get false with empty string',
    () => {
      const emptyString = '';

      expect(checkValidString(emptyString)).toBe(false);
    }
  );

  it(
    'should get false when string includes only korean consonant or vowel',
    () => {
      const invalidShortName = 'ㄴ나노';
      const validShortName = '나노';

      expect(checkValidString(invalidShortName)).toBe(false);
      expect(checkValidString(validShortName)).toBe(true);
    }
  );

  it(
    'should get false when string includes more than one special character',
    () => {
      const invalidShortName = '$돈줘';
      const invalidLongName = '$돈줘^^웃는다!)';
      const validShortName = '돈줘';

      expect(checkValidString(invalidShortName)).toBe(false);
      expect(checkValidString(invalidLongName)).toBe(false);
      expect(checkValidString(validShortName)).toBe(true);
    }
  );

  it(
    'should get false when string is more than 40 bytes',
    () => {
      const invalidKoreanName = '안녕하세요즐겁습니다무엇이든물어보세요';
      const invalidEnglishName = 'abcdefghijklmnopqrstuvwxyzekrjdlaksnfkdlskgjlsld';
      const validKoreanName = '안녕하세요';
      const validEnglishName = 'hello';

      expect(checkValidString(invalidKoreanName, 40)).toBe(false);
      expect(checkValidString(invalidEnglishName, 40)).toBe(false);
      expect(checkValidString(validKoreanName, 40)).toBe(true);
      expect(checkValidString(validEnglishName, 40)).toBe(true);
    }
  );
});