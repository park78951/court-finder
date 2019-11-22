import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CustomButton from '../../../lib/Button';
import Location from './Location';
import Keywords from './Keywords';
import Recommendation from './Recommendation';
import Level from './Level';
import { filterButton, buttonTheme } from '../../../../config/initConfig';
import { ThemeProvider } from 'styled-components';
import Style from './indexStyle';

const FilterDetail = () => {
  const { size, color } = filterButton;

  const { filterFlag, activeBtn } = useSelector(state => ({
    filterFlag: state.storeOnFlag.filterFlag,
    activeBtn: state.storeOnFilter.activeBtn
  }));
  const [filterData, setFilterData] = useState({});

  useEffect(() => {
    console.log(filterData);
  }, [filterData]);

  return filterFlag && (
    <ThemeProvider theme={ buttonTheme }>
      <Style.DetailWrapper>
        <Location 
          activeBtn={ activeBtn }
          setFilterData={ setFilterData }
        />
        <Keywords 
          activeBtn={ activeBtn }
          setFilterData={ setFilterData }
        />
        <Recommendation
          activeBtn={ activeBtn }
          setFilterData={ setFilterData }
        />
        <Level 
          activeBtn={ activeBtn }
          setFilterData={ setFilterData }
        />
        <div className='button__apply'>
          <CustomButton 
            size={ size }
            color={ color }
          >
            필터적용
          </CustomButton>
        </div>
      </Style.DetailWrapper>
    </ThemeProvider>
  );
};

export default FilterDetail;