import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { filterConfig } from '../../../../config/initConfig';
import { MdExpandMore } from 'react-icons/lib/md';
import Style from './FilterMenuStyle';

const FilterMenu = ({ isFilterOpen, setIsFilterOpen, activeBtn, setActiveBtn }) => {
  const filterToggler = useCallback(() => {
    setIsFilterOpen(state => !state);
  }, []);

  const selectFilterBtn = useCallback((btnName) => () => {
    if(!isFilterOpen) setIsFilterOpen(true);
    setActiveBtn(btnName);
  }, []);

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
    <Style.MenuWrapper isFilterOpen={ isFilterOpen }>
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

FilterMenu.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  setIsFilterOpen: PropTypes.func.isRequired,
  activeBtn: PropTypes.string.isRequired,
  setActiveBtn: PropTypes.func.isRequired,
};

export default React.memo(FilterMenu);