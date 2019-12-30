import React from 'react';
import FilterMenu from './FilterMenu';
import FilterDetail from './FilterDetail';
import Style from './indexStyle';

const SearchFilter = () => {
  return (
    <Style.FilterContainer>
      <FilterMenu />
      <FilterDetail />
    </Style.FilterContainer>
  );
};

export default React.memo(SearchFilter);