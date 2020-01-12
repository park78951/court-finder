export default (obj) => {
  const duplicateObj = {...obj};
  const objectKeys = Object.keys(duplicateObj);
  
  objectKeys.forEach(objKey => {
    if(!duplicateObj[objKey]) delete duplicateObj[objKey];
  });

  return duplicateObj;
};
