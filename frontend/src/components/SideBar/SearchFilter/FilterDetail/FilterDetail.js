import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Location from './Location';
import Keywords from './Keywords';
import Recommendation from './Recommendation';
import Level from './Level';
import Style from './FilterDetailStyle';
import { getFilterData, removeFilterData } from '../../../../actions';
import { Button } from '../../../lib';
import { filterButton, buttonTheme } from '../../../../config/initConfig';
import { FILTER_NOT_WORKING, FILTER_APPLIED } from '../../../../config/constants';
import { deleteObjProps } from '../../../../myUtil';

const FilterDetail = ({ isFilterOpen, activeBtn }) => {
  const { apply, initialize } = filterButton;
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({});

  const sendFilterData = useCallback(e => {
    e.stopPropagation();
    if(activeBtn !== 'location') {
      alert(FILTER_NOT_WORKING);
      return;
    }

    const polishedFilterData = deleteObjProps(filterData);
    dispatch(getFilterData(polishedFilterData));
    alert(FILTER_APPLIED);
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

  return isFilterOpen && (
    <ThemeProvider theme={ buttonTheme }>
      <Style.DetailWrapper>
        { filterDetailRenderer }
        <div className='button__apply'>
          <Button 
            size={ apply.size }
            color={ apply.color }
            onClick={ sendFilterData }
          >
            필터적용
          </Button>
          <Button 
            size={ initialize.size }
            color={ initialize.color }
            onClick={ initFilters }
          >
            필터초기화
          </Button>
        </div>
      </Style.DetailWrapper>
    </ThemeProvider>
  );
};

FilterDetail.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  activeBtn: PropTypes.string.isRequired,
};

export default FilterDetail;