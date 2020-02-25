import React from 'react';
import { SidebarContainer } from '@components/container';
import { requestCourts } from '@actions';

const Search = () => {
  return (
    <>
      <SidebarContainer />
    </>
  );
};

Search.getInitialProps = async context => {
  if(context.isServer) {
    const { store, query } = context;
    const { userInput, city, district, page } = query;
    const filterInput = {
      city: city ? city : '',
      district: district ? district : '',
    };
    
    store.dispatch(requestCourts({
      userInput,
      filterInput: filterInput,
      page: parseInt(page, 10),
    }));
  }
}

export default Search;