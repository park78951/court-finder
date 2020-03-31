import { Base64 } from 'js-base64';

export default (searchCondition) => {
  const searchKey = Base64.encode(JSON.stringify(searchCondition));
  return searchKey;
};