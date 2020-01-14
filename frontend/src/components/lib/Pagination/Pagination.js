import React, { useState, useMemo, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import PropTypes from 'prop-types';
import Style from './PaginationStyle';

const Pagination = ({ 
  courtsPerPage, 
  numbersOnList, 
  totalCourts, 
  clickHandler,
  userInput,
  filterInput,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState([]);
  const totalPage = Math.ceil(totalCourts / courtsPerPage);
  const totalNumbers = _.fill(Array(totalPage), 0)
    .map((_, idx) => idx + 1);

  const clickNext = useCallback(() => {
    if(currentPage === totalPage) return;
    clickHandler(userInput, filterInput, currentPage + 1);
    setCurrentPage(prevState => prevState + 1);
  }, [currentPage, userInput, filterInput]);

  const clickBefore = useCallback(() => {
    if(currentPage === 1) return;
    clickHandler(userInput, filterInput, currentPage - 1);
    setCurrentPage(currentPage - 1);
  }, [currentPage, userInput, filterInput]);

  const clickNumber = useCallback(({ target }) => {
    const targetNumber = Number(target.closest('button').textContent);
    clickHandler(userInput, filterInput, targetNumber);
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

Pagination.propTypes = {
  courtsPerPage: PropTypes.number,
  numbersOnList: PropTypes.number, 
  totalCourts: PropTypes.number, 
  clickHandler: PropTypes.func,
  userInput: PropTypes.string,
  filterInput: PropTypes.object,
};

export default Pagination;