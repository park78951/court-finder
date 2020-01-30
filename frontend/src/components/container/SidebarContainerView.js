import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';
import NoResult from '../NoResult';
import { Pagination } from '../lib';
import { startSearchingCourts } from '../../actions';
import { paginationConfig } from '@initConfig';
import { LAST_SEARCH } from '@constants';
import Style from './SidebarContainerStyle';

const SidebarListContainer = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError, 
    totalCourts, 
    userInput,
    currentPage 
  } = useSelector(state => state.storeOnSearch);
  const { filterInput } = useSelector(state => state.storeOnFilter);
  const dispatch = useDispatch();

  const changeCurrentPage = useCallback(({userInput, filterInput, page}) => {
    dispatch(startSearchingCourts({
      userInput, 
      filterInput, 
      page,
    }));
  }, [currentPage, userInput]);

  useEffect(() => {
    const lastSearchData = JSON.parse(sessionStorage.getItem(LAST_SEARCH)) || {};
    const isSameWithPreviousKey = lastSearchData.hasOwnProperty(userInput);
    
    if(!isSameWithPreviousKey) sessionStorage.removeItem(LAST_SEARCH);

    sessionStorage.setItem(
      LAST_SEARCH, 
      JSON.stringify({
        [userInput]: {
          ...lastSearchData[userInput],
          [currentPage]: searchedCourts
        }
      }
    ));
  }, [searchedCourts]);

  return (
    <>
      <HelperNav />
      <Style.SideBarContentsWrapper>
        {
          isError
            ? <Refetch />
            : (searchedCourts.length <= 0 && !isSearching
              ? <NoResult />
              : <CourtList />)
        }
        { isSearching && <Loader /> }
      </Style.SideBarContentsWrapper>
      { searchedCourts.length > 0 && (
        <Pagination 
          clickHandler={ changeCurrentPage }
          totalCourts={ totalCourts }
          { ...paginationConfig }
          userInput={ userInput }
          filterInput={ filterInput }
          lastPage={ currentPage }
        />
      ) }
    </>
  );
};

export default React.memo(SidebarListContainer);