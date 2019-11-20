import React from 'react';
import { useSelector } from 'react-redux';
import Style from './indexStyle';

const FilterDetail = () => {
  const { filterFlag } = useSelector(state => ({
    filterFlag: state.storeOnFlag.filterFlag
  }));

  return (
    <Style.DetailWrapper filterFlag={ filterFlag }>
      
    </Style.DetailWrapper>
  );
};

export default FilterDetail;