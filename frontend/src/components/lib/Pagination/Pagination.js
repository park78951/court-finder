import React, { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Style from './PaginationStyle';

const Pagination = ({ courtsPerPage, numbersOnList, totalCourts, clickHandler }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPages, setCurrentPages] = useState([]);

  const totalPage = Math.floor(totalCourts / courtsPerPage);
  const totalNumbers = _.fill(Array(totalPage), 0)
    .map((_, idx) => idx + 1);

  const numberList = useMemo(() => {
    const pageList = currentPages.map(pageNumber => (
      <button key={_.uniqueId(pageNumber)} onClick={ clickHandler }>
        { pageNumber }
      </button>
    ));

    return (
      <div className='number-btns'>
        { pageList }
      </div>
    );
  }, [currentPages]);

  useEffect(() => {
    const pageDivision = currentPage / numbersOnList;
    const numberStartingFromOnList = pageDivision * numbersOnList;
    const numberEndingBeforeOnList = (pageDivision + 1) * numbersOnList;

    setCurrentPages(totalNumbers.slice(
      numberStartingFromOnList, 
      numberEndingBeforeOnList
    ));
  }, [totalCourts, currentPage]);

  return (
    <Style.PaginationWrapper>
      <button onClick={ clickHandler } className='arrow-btn'>
        <MdKeyboardArrowLeft size={30}/>
      </button>
      { numberList }
      <button onClick={ clickHandler } className='arrow-btn'> 
        <MdKeyboardArrowRight size={30}/>
      </button>
    </Style.PaginationWrapper>
  );
};

export default Pagination;