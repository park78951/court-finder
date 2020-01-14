import React, { useState, useEffect } from 'react';
import FilterType from './FilterType';
import { filterConfig } from '../../../../config/initConfig';
import { FILTER_OPTIONS_TYPES } from '../../../../config/constants';
import { storeKeywords } from '../../../../myUtil';
import PropTypes from 'prop-types';


const Level = ({ setFilterInput }) => {
  const levelDetails = filterConfig.level.details;
  const levelOptions = Object.keys(levelDetails);
  const [levelFilter, setLevelFilter] = useState({});

  const dropdownList = levelOptions.map(levelOption => {
    const levelType = FILTER_OPTIONS_TYPES[levelOption];
    return(
      <FilterType 
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
    setFilterInput(levelFilter);
  }, [levelFilter]);

  return (
    <div className='dropdown__menus'>
      { dropdownList }
    </div>
  );
};

Level.propTypes = {
  setFilterInput: PropTypes.func
};

export default React.memo(Level);