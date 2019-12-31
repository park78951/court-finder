import React, { useState, useEffect } from 'react';
import FilterMenu from './FilterType';
import { filterConfig} from '../../../../config/initConfig';
import PropTypes from 'prop-types';

const Location = ({ setFilterData }) => {
  const locationDetail = filterConfig.location.options;
  const cities = Object.keys(locationDetail);

  const [city, setCity] = useState('');
  const [gu_nm, setGu_nm] = useState('');

  useEffect(() => {
    setFilterData({
      city,
      gu_nm
    });
    if(!city) {
      setGu_nm('');
    }
  }, [city, gu_nm]);

  return (
    <div className='dropdown__menus'>
      <FilterMenu 
        menuTitle='도시명'
        onChange={ ({ target }) => setCity(target.value) }
        optionValues={ cities }
      />
      <FilterMenu 
        menuTitle='군/구'
        onChange={ ({ target }) => setGu_nm(target.value)}
        optionValues={ locationDetail[city] }
      />
    </div>
  );
};

Location.propTypes = {
  setFilterData: PropTypes.func
};

export default React.memo(Location);