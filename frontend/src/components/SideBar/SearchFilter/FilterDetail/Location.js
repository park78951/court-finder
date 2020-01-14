import React, { useState, useEffect } from 'react';
import FilterType from './FilterType';
import { filterConfig} from '../../../../config/initConfig';
import PropTypes from 'prop-types';

const Location = ({ setFilterInput }) => {
  const locationDetail = filterConfig.location.options;
  const cities = Object.keys(locationDetail);

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  useEffect(() => {
    setFilterInput({
      city,
      district
    });
    if(!city) {
      setDistrict('');
    }
  }, [city, district]);

  return (
    <div className='dropdown__menus'>
      <FilterType 
        menuTitle='도시명'
        onChange={ ({ target }) => setCity(target.value) }
        optionValues={ cities }
      />
      <FilterType 
        menuTitle='군/구'
        onChange={ ({ target }) => setDistrict(target.value)}
        optionValues={ locationDetail[city] }
      />
    </div>
  );
};

Location.propTypes = {
  setFilterInput: PropTypes.func
};

export default React.memo(Location);