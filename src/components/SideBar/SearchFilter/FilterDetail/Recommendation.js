import React, { useState, useEffect } from 'react';
import FilterMenu from './filterMenu';
import { filterConfig } from '../../../../config/initConfig';
import { FILTER_OPTIONS_TYPES } from '../../../../config/constants';
import { storeKeywords } from '../../../../myUtil';
import PropTypes from 'prop-types';


const Recommendation = ({ setFilterData }) => {
  const recommendDetails = filterConfig.recommendation.details;
  const recommendations = Object.keys(recommendDetails);
  const [recommendFilter, setRecommendFilter] = useState({});

  const dropdownList = recommendations.map(recommendation => {
    const recommendType = FILTER_OPTIONS_TYPES[recommendation];
    return(
      <FilterMenu 
        key={ recommendation }
        menuTitle={ recommendation }
        optionValues={ recommendDetails[recommendation] }
        onChange={ 
          storeKeywords(
            recommendType, 
            recommendFilter, 
            setRecommendFilter
          )
        }
      />
    );
  });

  useEffect(() => {
    setFilterData(recommendFilter);
  }, [recommendFilter]);

  return (
    <div className='dropdown__menus'>
      { dropdownList }
    </div>
  );
};

Location.propTypes = {
  setFilterData: PropTypes.func
};

export default React.memo(Recommendation);