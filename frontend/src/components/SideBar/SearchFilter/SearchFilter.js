import React from 'react';
import FilterDetail from './FilterDetail';
import Style from './SearchFilterStyle';

const SearchFilter = () => {
  return (
    <Style.FilterContainer>
      <FilterDetail />
    </Style.FilterContainer>
  );
};

export default React.memo(SearchFilter);