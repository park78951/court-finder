import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';
import NoResult from '../NoResult';
import { Pagination } from '../lib';
import { startSearchingCourts } from '../../actions';
import { paginationConfig } from '../../config/initConfig';
import Style from './SidebarContainerStyle';

const SidebarListContainer = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError, 
    totalCourts, 
    userInput } = useSelector(state => state.storeOnSearch);
  const { filterInput } = useSelector(state => state.storeOnFilter);
  const dispatch = useDispatch();

  const changeCurrentPage = (userInput, filterInput, page) => {
    dispatch(startSearchingCourts({
      userInput, 
      filterInput, 
      page,
    }))
  };

  return (
    <>
      {/* <HelperNav /> */}
      <Style.SideBarContentsWrapper>
      {
        isError
          ? <Refetch />
          : (searchedCourts.length
            ? <CourtList />
            : <NoResult />)
      }
      {isSearching && <Loader />}
      </Style.SideBarContentsWrapper>
      {searchedCourts.length && (
        <Pagination 
          clickHandler={ changeCurrentPage }
          totalCourts={ 10 }
          { ...paginationConfig }
          userInput={ userInput }
          filterInput={ filterInput }
        />
      )}
    </>
  );
};

export default React.memo(SidebarListContainer);