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
import { courtsPageConfig } from '@config';
import { getSearchQueries } from '@myUtils';
import Style from './SidebarContainerStyle';

const SidebarContainerView = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError, 
    totalCourts, 
    currentPage,
    userInput,
    filterInput
  } = useSelector(({ courts }) => courts);
  const dispatch = useDispatch();
  const router = useRouter();

  const onChangePage = useCallback((page) => {
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
          onChangePage={onChangePage}
          totalCourts={totalCourts}
          lastPage={currentPage}
          {...courtsPageConfig}
        />
      ) }
    </>
  );
};

export default React.memo(SidebarContainerView);