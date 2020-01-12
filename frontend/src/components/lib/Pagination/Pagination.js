import React, { useState, useMemo, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Style from './PaginationStyle';

const Pagination = ({ courtsPerPage, numbersOnList, totalCourts, clickHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState([]);

  const totalPage = Math.floor(totalCourts / courtsPerPage);
  const totalNumbers = _.fill(Array(totalPage), 0)
    .map((_, idx) => idx + 1);

  const clickNext = useCallback((event) => {
    if(currentPage === totalPage) return;
    clickHandler(event);
    setCurrentPage(prevState => prevState + 1);
  }, [currentPage]);

  const clickBefore = useCallback((event) => {
    if(currentPage === 1) return;
    clickHandler(event);
    setCurrentPage(prevState => prevState - 1);
  }, [currentPage]);

  const clickNumber = useCallback(({ target }) => {
    const targetNumber = Number(target.closest('button').textContent);
    if(currentPage === targetNumber) return;
    console.log(targetNumber);
    // clickHandler(target);
    setCurrentPage(targetNumber);
  }, [currentPage]);

  const numberList = useMemo(() => {
    const pageList = currentPages.map(pageNumber => (
      <button key={_.uniqueId(pageNumber)} onClick={ clickNumber }>
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
    const pageDivision = Math.floor((currentPage - 1) / numbersOnList);
    const numberStartingFromOnList = pageDivision * numbersOnList;
    const numberEndingBeforeOnList = (pageDivision + 1) * numbersOnList;

    setCurrentPages(totalNumbers.slice(
      numberStartingFromOnList, 
      numberEndingBeforeOnList
    ));
  }, [totalCourts, currentPage]);

  return (
    <Style.PaginationWrapper currentPage={ currentPage } numbersOnList={ numbersOnList }>
      <div>
        <button onClick={ clickBefore } className='arrow-btn arrow-btn__before'>
          <MdNavigateBefore size={20}/>
        </button>
        { numberList }
        <button onClick={ clickNext } className='arrow-btn arrow-btn__next'> 
          <MdNavigateNext size={20}/>
        </button>
      </div>
    </Style.PaginationWrapper>
  );
};

export default Pagination;