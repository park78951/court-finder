export default (...funcs) => (param) => {
  return funcs.reduce((promiseRes, func) => {
    return promiseRes.then(result => func(result));
  }, Promise.resolve(param));
};