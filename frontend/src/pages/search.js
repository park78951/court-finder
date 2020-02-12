import React from 'react';
import { SidebarContainerView } from '@components/container';
import { requestCourts } from '@actions';

const Search = () => {
  return (
    <>
      <SidebarContainerView />
    </>
  );
};

Search.getInitialProps = async context => {
  if(typeof window !== "undefined") return;

  const { store, query } = context;
  const { userInput, filterInput, page } = query;
  
  store.dispatch(requestCourts({
    userInput,
    filterInput: filterInput ? filterInput : {},
    page: parseInt(page, 10),
  }));

  return { userInput, filterInput, page };
}

export default Search;