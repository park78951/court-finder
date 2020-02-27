import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { fill, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import { getCurrentPageNumbers } from '@myUtils';
import Style from './PaginationStyle';

const Pagination = ({ 
  courtsPerPage, 
  numbersOnList, 
  totalCourts, 
  onChangePage,
  lastPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState([]);
  const totalPage = Math.ceil(totalCourts / courtsPerPage);
  const totalPageNumbers = fill(Array(totalPage), 0)
    .map((_, idx) => idx + 1);

  const clickNext = useCallback(() => {
    if(currentPage === totalPage) return;
    onChangePage(currentPage + 1);
    setCurrentPage(prevState => prevState + 1);
  }, [currentPage]);

  const clickPrev = useCallback(() => {
    if(currentPage === 1) return;
    onChangePage(currentPage - 1);
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const clickNumber = useCallback(({ target }) => {
    const targetNumber = Number(target.closest('button').textContent);
    onChangePage(targetNumber);
    setCurrentPage(targetNumber);
  }, [currentPage]);

  const numberList = useMemo(() => {
    const pageList = currentPages.map(pageNumber => (
      <button key={uniqueId(pageNumber)} onClick={ clickNumber }>
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
      numberOfItemsOnPage: numbersOnList,
      totalPageNumbers
    })
    setCurrentPages(currentPageNumbers);
  }, [totalCourts, currentPage]);

  return (
    <Style.PaginationWrapper 
      currentPage={ currentPage } 
      numbersOnList={ numbersOnList }
      lastPage={ totalPageNumbers.length }
    >
      <div>
        <button onClick={ clickPrev } className='arrow-btn arrow-btn__prev'>
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
  onChangePage: PropTypes.func,
  lastPage: PropTypes.number,
};

export default React.memo(Pagination);