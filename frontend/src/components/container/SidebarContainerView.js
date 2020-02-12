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
import { courtsPageConfig } from '@initConfig';
import { getSearchQueries } from '@myUtils';
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

    const searchRoute = getSearchQueries({
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
          { ...courtsPageConfig }
          userInput={ userInput }
          filterInput={ filterInput }
          lastPage={ currentPage }
        />
      ) }
    </>
  );
};

export default React.memo(SidebarListContainer);