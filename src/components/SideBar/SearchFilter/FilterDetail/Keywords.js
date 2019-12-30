import React, { useState, useEffect } from 'react';
import FilterMenu from './FilterType';
import { filterConfig } from '../../../../config/initConfig';
import { FILTER_OPTIONS_TYPES } from '../../../../config/constants';
import { storeKeywords } from '../../../../myUtil';
import PropTypes from 'prop-types';

const Keywords = ({ setFilterData }) => {
  const keywordsDetails = filterConfig.keywords.details;
  const keywords = Object.keys(keywordsDetails);
  const [keywordFilter, setKeywordFilter] = useState({});

  const dropdownList = keywords.map(keyword => {
    const keywordType = FILTER_OPTIONS_TYPES[keyword];
    return(
      <FilterMenu 
        key={ keyword }
        menuTitle={ keyword }
        optionValues={ keywordsDetails[keyword] }
        onChange={ 
          storeKeywords(
            keywordType, 
            keywordFilter, 
            setKeywordFilter
          )
        }
      />
    );
  });

  useEffect(() => {
    setFilterData(keywordFilter);
  }, [keywordFilter]);

  return (
    <div className='dropdown__menus'>
      { dropdownList }
    </div>
  );
};

Location.propTypes = {
  setFilterData: PropTypes.func
};

export default React.memo(Keywords);