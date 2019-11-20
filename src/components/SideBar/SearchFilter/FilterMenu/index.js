import React from 'react';
import { MdExpandMore } from 'react-icons/lib/md';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from '../../../../actions';
import Style from './indexStyle';

const FilterMenu = () => {
  const dispatch = useDispatch();
  const { filterFlag } = useSelector(state => ({
    filterFlag: state.storeOnFlag.filterFlag
  }));

  const filterToggler = () => {
    dispatch(toggleFilter());
  };

  return (
    <Style.MenuWrapper filterFlag={ filterFlag }>
      <button className='filter__types'>지역별</button>
      <button className='filter__types'>키워드별</button>
      <button className='filter__types'>유저추천</button>
      <button className='filter__types'>수준별</button>
      <button 
        className='filter__dropdown'
        onClick={ filterToggler }
      >
        <MdExpandMore 
          size={ 40 }
          className='filter__dropdown--icon'
        />
      </button>
    </Style.MenuWrapper>
  );
};

export default FilterMenu;