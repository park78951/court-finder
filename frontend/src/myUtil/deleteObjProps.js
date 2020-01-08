const deleteObjProps = obj => {
  const duplicateObj = {...obj};
  const objectKeys = Object.keys(obj);
  
  objectKeys.forEach(objKey => {
    if(!duplicateObj[objKey]) delete duplicateObj[objKey];
  });

  return duplicateObj;
};

export default deleteObjProps;