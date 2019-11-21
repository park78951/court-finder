import React, { useState, useEffect } from 'react';
import FilterMenu from './filterMenu';
import { filterConfig } from '../../../../config/initConfig';
import { FILTER_OPTIONS_TYPES } from '../../../../config/constants';
import { storeKeywords } from '../../../../helper/myUtil';
import Style from './levelStyle';
import PropTypes from 'prop-types';


const Level = ({ activeBtn, setFilterData }) => {
  const levelDetails = filterConfig.level.details;
  const levelOptions = Object.keys(levelDetails);
  const [levelFilter, setLevelFilter] = useState({});

  const dropdownList = levelOptions.map(levelOption => {
    const levelType = FILTER_OPTIONS_TYPES[levelOption];
    return(
      <FilterMenu 
        key={ levelOption }
        menuTitle={ levelOption }
        optionValues={ levelDetails[levelOption] }
        onChange={ 
          storeKeywords(
            levelType, 
            levelFilter, 
            setLevelFilter
          )
        }
      />
    );
  });

  useEffect(() => {
    setFilterData(levelFilter);
  }, [levelFilter]);

  return (
    <Style.LevelWrapper 
      activeBtn={ activeBtn }
      className='dropdown__menus'
    >
      { dropdownList }
    </Style.LevelWrapper>
  );
};

Level.propTypes = {
  activeBtn: PropTypes.string,
  setFilterData: PropTypes.func
};

export default React.memo(Level);