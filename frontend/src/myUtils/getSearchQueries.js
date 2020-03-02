export default (requestData) => {
  const filterRequestData = Object.entries(requestData).filter(dataSet => dataSet[1]);

  const requestQuery = filterRequestData.reduce((query, dataSet, idx) => {
    let nextQuery = idx > 0 ? query + '&' : query;
    const [queryName, queryValue] = dataSet;
    
    return `${nextQuery}${queryName}=${queryValue}`;
  }, '?');

  return requestQuery;
}