const checkUnfilled = collection => {
  return Object.values(collection).every(val => val);
};

export default checkUnfilled;