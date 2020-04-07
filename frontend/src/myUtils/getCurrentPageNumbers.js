export default ({ currentPage, numberOfItemsOnPage, totalPageNumbers }) => {
  const pageDivision = Math.floor((currentPage - 1) / numberOfItemsOnPage);
  const numberStartingFromOnList = pageDivision * numberOfItemsOnPage;
  const numberEndingBeforeOnList = (pageDivision + 1) * numberOfItemsOnPage;
  const currentPageNumbers = totalPageNumbers.slice(
    numberStartingFromOnList, 
    numberEndingBeforeOnList
  );

  return currentPageNumbers;
};