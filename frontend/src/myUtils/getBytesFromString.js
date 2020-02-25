export default (str) => {
  return [...str]
    .map(s => s.charCodeAt(0))
    .reduce((prev, c) => (prev + ((c >> 11) ? 3 : ((c >> 7) ? 2 : 1))), 0);
}