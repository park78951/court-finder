import React, { useState, useEffect } from 'react';
import FilterMenu from './filterMenu';
import { filterConfig} from '../../../../config/initConfig';
import Style from './LocationStyle';
import PropTypes from 'prop-types';

const Location = ({ activeBtn, setFilterData }) => {
  const locationDetail = filterConfig.location.options;
  const cities = Object.keys(locationDetail);

  const [city, setCity] = useState('');
  const [division, setDivision] = useState('');

  useEffect(() => {
    setFilterData({
      city,
      division
    });
  }, [city, division]);

  return activeBtn === 'location' && (
    <Style.LocationWrapper 
      activeBtn={ activeBtn }
      className='dropdown__menus'
    >
      <FilterMenu 
        menuTitle='도시명'
        onChange={ ({ target }) => setCity(target.value) }
        optionValues={ cities }
      />
      <FilterMenu 
        menuTitle='군/구'
        onChange={ ({ target }) => setDivision(target.value)}
        optionValues={ locationDetail[city] }
      />
    </Style.LocationWrapper>
  );
};

Location.propTypes = {
  activeBtn: PropTypes.string,
  setFilterData: PropTypes.func
};

export default React.memo(Location);