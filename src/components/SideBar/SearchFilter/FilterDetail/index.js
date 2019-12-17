import React, { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterData, removeFilterData } from '../../../../actions';
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
  const { apply, initialize } = filterButton;

  const { filterFlag, activeBtn } = useSelector(state => ({
    filterFlag: state.storeOnFlag.filterFlag,
    activeBtn: state.storeOnFilter.activeBtn
  }));
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({});

  const sendFilterData = useCallback(e => {
    e.stopPropagation();
    if(activeBtn !== 'location') {
      alert('해당 기능은 준비중입니다.');
      return;
    }

    const polishedFilterData = deleteObjProps(filterData);
    dispatch(getFilterData(polishedFilterData));
  }, [activeBtn, filterData]);

  const initFilters = useCallback(() => {
    dispatch(removeFilterData());
  }, []);

  const filterDetailRenderer = useMemo(() => {
    switch(activeBtn) {
      case 'location':
        return (
          <Location 
            setFilterData={ setFilterData }
          />
        );
      case 'keywords':
        return (
          <Keywords 
            setFilterData={ setFilterData }
          />
        );
      case 'recommendation':
        return (
          <Recommendation
            setFilterData={ setFilterData }
          />
        );
      case 'level':
        return (
          <Level 
            setFilterData={ setFilterData }
          />
        );
      default:
        break;
    }
  }, [activeBtn]);

  return filterFlag && (
    <ThemeProvider theme={ buttonTheme }>
      <Style.DetailWrapper>
        { filterDetailRenderer }
        <div className='button__apply'>
          <CustomButton 
            size={ apply.size }
            color={ apply.color }
            onClick={ sendFilterData }
          >
            필터적용
          </CustomButton>
          <CustomButton 
            size={ initialize.size }
            color={ initialize.color }
            onClick={ initFilters }
          >
            필터초기화
          </CustomButton>
        </div>
      </Style.DetailWrapper>
    </ThemeProvider>
  );
};

export default FilterDetail;