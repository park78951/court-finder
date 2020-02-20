import isValidString from '../isValidString';

describe('test isValidString', () => {
  it(
    'should get false when string includes only korean consonant or vowel',
    () => {
      const invalidShortName = 'ㄴ나노';
      const validShortName = '나노';

      expect(isValidString(invalidShortName)).toBe(false);
      expect(isValidString(validShortName)).toBe(true);
    }
  );

  it(
    'should get false when string includes more than one special character',
    () => {
      const invalidShortName = '$돈줘';
      const invalidLongName = '$돈줘^^웃는다!)';
      const validShortName = '돈줘';

      expect(isValidString(invalidShortName)).toBe(false);
      expect(isValidString(invalidLongName)).toBe(false);
      expect(isValidString(validShortName)).toBe(true);
    }
  );

  it(
    'should get false when string is more than 40 bytes',
    () => {
      const invalidKoreanName = '안녕하세요즐겁습니다무엇이든물어보세요';
      const invalidEnglishName = 'abcdefghijklmnopqrstuvwxyzekrjdlaksnfkdlskgjlsld';
      const validKoreanName = '안녕하세요';
      const validEnglishName = 'hello';

      expect(isValidString(invalidKoreanName, 40)).toBe(false);
      expect(isValidString(invalidEnglishName, 40)).toBe(false);
      expect(isValidString(validKoreanName, 40)).toBe(true);
      expect(isValidString(validEnglishName, 40)).toBe(true);
    }
  );
});