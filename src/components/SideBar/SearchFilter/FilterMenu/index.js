import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter, getActiveBtnName } from '../../../../actions';
import { filterConfig } from '../../../../config/initConfig';
import { MdExpandMore } from 'react-icons/lib/md';
import Style from './indexStyle';

const FilterMenu = () => {
  const dispatch = useDispatch();
  const { filterFlag, activeBtn } = useSelector(state => ({
    filterFlag: state.storeOnFlag.filterFlag,
    activeBtn: state.storeOnFilter.activeBtn
  }));

  const filterToggler = () => {
    dispatch(toggleFilter());
  };

  const selectFilterBtn = (btnName) => () => {
    dispatch(getActiveBtnName(btnName));
    dispatch(toggleFilter(true));
  };

  const filterBtn = Object.keys(filterConfig).map(filterKey => {
    const filterTitle = filterConfig[filterKey].name;
    
    return (
      <button 
        className={`filter__types ${ filterKey === activeBtn && 'button__active' }`}
        key={ filterKey }
        onClick={ selectFilterBtn(filterKey) }
      >
        { filterTitle }
      </button>
    );
  });

  return (
    <Style.MenuWrapper filterFlag={ filterFlag }>
      { filterBtn }
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