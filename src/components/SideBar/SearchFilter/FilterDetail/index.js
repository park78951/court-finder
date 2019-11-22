import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterData } from '../../../../actions';
import CustomButton from '../../../lib/Button';
import Location from './Location';
import Keywords from './Keywords';
import Recommendation from './Recommendation';
import Level from './Level';
import { filterButton, buttonTheme } from '../../../../config/initConfig';
import { deleteObjProps } from '../../../../myUtil';
import { ThemeProvider } from 'styled-components';
import Style from './indexStyle';

const FilterDetail = () => {
  const { size, color } = filterButton;

  const { filterFlag, activeBtn } = useSelector(state => ({
    filterFlag: state.storeOnFlag.filterFlag,
    activeBtn: state.storeOnFilter.activeBtn
  }));
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({});

  const sendFilterData = e => {
    e.stopPropagation();
    if(activeBtn !== 'location') {
      alert('해당 기능은 준비중입니다.');
      return;
    }

    const polishedFilterData = deleteObjProps(filterData);
    dispatch(getFilterData(polishedFilterData));
  };

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
            onClick={ sendFilterData }
          >
            필터적용
          </CustomButton>
        </div>
      </Style.DetailWrapper>
    </ThemeProvider>
  );
};

export default FilterDetail;