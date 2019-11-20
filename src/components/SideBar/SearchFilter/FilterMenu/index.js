import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter, getActiveBtnName } from '../../../../actions';
import { filterTitle } from '../../../../config/initConfig';
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

  const filterBtn = Object.keys(filterTitle).map(filterName => {
    return (
      <button 
        className={`filter__types ${ filterName === activeBtn && 'button__active' }`}
        key={ filterName }
        onClick={ selectFilterBtn(filterName) }
      >
        { filterTitle[filterName] }
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

export default React.memo(FilterMenu);