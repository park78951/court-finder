import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import _ from 'lodash';
import PropTypes from 'prop-types';
import { getCurrentPageNumbers } from '@myUtils';
import Style from './PaginationStyle';

const Pagination = ({ 
  courtsPerPage, 
  numbersOnList, 
  totalCourts, 
  clickHandler,
  userInput,
  filterInput,
  lastPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState([]);
  const totalPage = Math.ceil(totalCourts / courtsPerPage);
  const totalPageNumbers = _.fill(Array(totalPage), 0)
    .map((_, idx) => idx + 1);

  const clickNext = useCallback(() => {
    if(currentPage === totalPage) return;
    clickHandler({
      userInput, 
      filterInput, 
      page: currentPage + 1
    });
    setCurrentPage(prevState => prevState + 1);
  }, [currentPage, userInput, filterInput]);

  const clickBefore = useCallback(() => {
    if(currentPage === 1) return;
    clickHandler({
      userInput, 
      filterInput, 
      page: currentPage - 1
    });
    setCurrentPage(currentPage - 1);
  }, [currentPage, userInput, filterInput]);

  const clickNumber = useCallback(({ target }) => {
    const targetNumber = Number(target.closest('button').textContent);
    clickHandler({
      userInput, 
      filterInput, 
      page: targetNumber
    });
    setCurrentPage(targetNumber);
  }, [currentPage, userInput, filterInput]);

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
    setCurrentPage(lastPage);
  }, [lastPage]);

  useEffect(() => {
    const currentPageNumbers = getCurrentPageNumbers({
      currentPage,
      itemsToShow: numbersOnList,
      totalPageNumbers
    })
    setCurrentPages(currentPageNumbers);
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

Pagination.propTypes = {
  courtsPerPage: PropTypes.number,
  numbersOnList: PropTypes.number, 
  totalCourts: PropTypes.number, 
  clickHandler: PropTypes.func,
  userInput: PropTypes.string,
  filterInput: PropTypes.object,
  lastPage: PropTypes.number,
};

export default Pagination;