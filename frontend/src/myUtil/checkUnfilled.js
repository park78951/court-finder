export default collection => {
  return Object.values(collection).every(val => val);
};
