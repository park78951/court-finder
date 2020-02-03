import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';
import NoResult from '../NoResult';
import { Pagination } from '../lib';
import { startSearchingCourts } from '@actions';
import { paginationConfig } from '@initConfig';
import Style from './SidebarContainerStyle';

const SidebarListContainer = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError, 
    totalCourts, 
    currentPage 
  } = useSelector(state => state.storeOnSearch);
  const { userInput, filterInput } = useSelect(state => state.storeOnInput);
  const dispatch = useDispatch();

  const changeCurrentPage = useCallback(({userInput, filterInput, page}) => {
    dispatch(startSearchingCourts({
      userInput, 
      filterInput, 
      page,
    }));
  }, [currentPage, userInput, filterInput]);

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