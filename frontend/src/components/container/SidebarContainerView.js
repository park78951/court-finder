import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';
import { Pagination } from '../lib';
import { paginationConfig } from '../../config/initConfig';


const SidebarListContainer = () => {
  const { searchedCourts, isSearching, isError, totalCourts } = useSelector(state => state.storeOnSearch);
  
  const changeCurrentPage = useCallback(event => {
    event.stopPropagation();
    console.log(event);
  }, []);

  return (
    <>
      <HelperNav />
      {
        isSearching
          ? <Loader />
          : ( isError
            ? <Refetch />
            : ( searchedCourts.length
              ? <CourtList />
              : <p>검색 데이터가 없습니다.</p>
            ))
      }
      <Pagination 
        clickHandler={ changeCurrentPage }
        totalCourts={ 20 }
        { ...paginationConfig }
      />
    </>
  );
};

export default React.memo(SidebarListContainer);