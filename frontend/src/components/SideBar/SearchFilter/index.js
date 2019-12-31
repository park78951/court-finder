import React, { useState } from 'react';
import FilterMenu from './FilterMenu';
import FilterDetail from './FilterDetail';
import Style from './indexStyle';

const SearchFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState('location');

  return (
    <Style.FilterContainer>
      <FilterMenu 
        isFilterOpen={ isFilterOpen }
        setIsFilterOpen={ setIsFilterOpen }
        activeBtn={ activeBtn }
        setActiveBtn={ setActiveBtn }
      />
      <FilterDetail 
        isFilterOpen={ isFilterOpen }
        activeBtn={ activeBtn }
      />
    </Style.FilterContainer>
  );
};

export default React.memo(SearchFilter);