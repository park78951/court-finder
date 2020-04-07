import getBytesFromString from './getBytesFromString';

/**
 * 자음, 모음만 있는 한글 불가
 * 특수문자 불가
 */
export default (strValue, bytesLimit) => {
  if(!strValue) return false;

  let result = true;
  const inValidKorean = /[ㄱ-ㅎ|ㅏ-ㅣ]/; 
  const specialChar = /[{}[\]/?.,;:|)*~`!^\-+<>@#$%&\\=('"]/gi;
  
  if(inValidKorean.test(strValue) 
      || specialChar.test(strValue)
      || getBytesFromString(strValue) > bytesLimit) {
    result = false;
  }
    
  return result;
};