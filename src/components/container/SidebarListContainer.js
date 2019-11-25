import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';


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
      { LoaderRenderer() }
    </>
  );
};

export default SidebarListContainer;