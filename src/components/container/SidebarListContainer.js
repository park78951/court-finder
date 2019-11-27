import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';


const SidebarListContainer = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError 
  } = useSelector(state => ({
    searchedCourts: state.storeOnSearch.searchedCourts,
    isSearching: state.storeOnSearch.isSearching,
    isError: state.storeOnSearch.isError
  }));

  const CourtListRenderer = () => {
    return (
      searchedCourts.length 
        ? <CourtList />
        : <p>검색 데이터가 없습니다.</p>
    );
  };

  const refetchRenderer = () => {
    return (
      isError
        ? <Refetch />
        : CourtListRenderer()
    );
  };

  const LoaderRenderer = () => {
    return (
      isSearching
        ? <Loading />
        : refetchRenderer()
    );
  };

  return (
    <>
      <HelperNav />
      { LoaderRenderer() }
    </>
  );
};

export default SidebarListContainer;