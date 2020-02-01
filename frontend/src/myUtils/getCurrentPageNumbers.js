export default ({ currentPage, itemsToShow, totalPageNumbers }) => {
  const pageDivision = Math.floor((currentPage - 1) / itemsToShow);
  const numberStartingFromOnList = pageDivision * itemsToShow;
  const numberEndingBeforeOnList = (pageDivision + 1) * itemsToShow;
  const currentPageNumbers = totalPageNumbers.slice(
    numberStartingFromOnList, 
    numberEndingBeforeOnList
  );

  return currentPageNumbers;
}