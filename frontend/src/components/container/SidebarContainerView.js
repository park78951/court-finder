import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Loader from '../Loader';
import Refetch from '../SideBar/Refetch';
import CourtList from '../SideBar/CourtList';
import HelperNav from '../SideBar/HelperNav';
import NoResult from '../NoResult';
import { Pagination } from '../lib';
import { requestCourts } from '@actions';
import { paginationConfig, createSearchQuery } from '@initConfig';
import Style from './SidebarContainerStyle';

const SidebarListContainer = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError, 
    totalCourts, 
    currentPage 
  } = useSelector(({ courts }) => courts);
  const { userInput, filterInput } = useSelector(({ input }) => input);
  const dispatch = useDispatch();
  const router = useRouter();

  const changeCurrentPage = useCallback(({userInput, filterInput, page}) => {
    dispatch(requestCourts({
      userInput, 
      filterInput, 
      page,
    }));

    const searchRoute = createSearchQuery({
      userInput: userInput,
      city: filterInput.city,
      district: filterInput.district,
      page: page,
    });
    router.push(searchRoute);
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