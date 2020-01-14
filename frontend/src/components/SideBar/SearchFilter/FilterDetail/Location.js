import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FilterType from './FilterType';
import { getFilterInput } from '../../../../actions';
import { filterConfig } from '../../../../config/initConfig';

const Location = () => {
  const locationDetail = filterConfig.location.options;
  const cities = Object.keys(locationDetail);

  const dispatch = useDispatch();
  // 추후 data 양 증가에 따른 data set 변경
  const [city, setCity] = useState(cities[0]);

  // 추후 data 양 증가에 따른 payload 넘겨주는 data 변경
  // 현재는 onChange가 될 일이 없음
  const setCityFilter = useCallback(({ target }) => {
    setCity(target);
  }, []);

  const setDistrictFilter = useCallback(({ target }) => {
    dispatch(getFilterInput({
      city,
      district: target.value,
    }));
  }, []);
  
  return (
    <div className='dropdown__menus'>
      <FilterType 
        menuTitle='도시명'
        onChange={ setCityFilter }
        optionValues={ cities }
        placeholder={ false }
      />
      <FilterType 
        menuTitle='군/구'
        onChange={ setDistrictFilter }
        optionValues={ locationDetail[city] }
      />
    </div>
  );
};

export default React.memo(Location);