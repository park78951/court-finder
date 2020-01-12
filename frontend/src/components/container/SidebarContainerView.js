import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';



const SidebarListContainer = () => {
  const { searchedCourts, isSearching, isError } = useSelector(state => state.storeOnSearch);

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
    </>
  );
};

export default React.memo(SidebarListContainer);