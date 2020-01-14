import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Location from './Location';
import Keywords from './Keywords';
import Recommendation from './Recommendation';
import Level from './Level';
import Style from './FilterDetailStyle';
import { getFilterInput, removeFilterInput } from '../../../../actions';
import { Button } from '../../../lib';
import { filterButton, buttonTheme } from '../../../../config/initConfig';
import { FILTER_NOT_WORKING, FILTER_APPLIED } from '../../../../config/constants';
import { deleteObjProps } from '../../../../myUtil';

const FilterDetail = ({ isFilterOpen, activeBtn }) => {
  const { apply, initialize } = filterButton;
  const dispatch = useDispatch();

  const [filterInput, setFilterInput] = useState({});

  const sendFilterInput = useCallback(e => {
    e.stopPropagation();
    if(activeBtn !== 'location') {
      alert(FILTER_NOT_WORKING);
      return;
    }

    const polishedFilterInput = deleteObjProps(filterInput);
    dispatch(getFilterInput(polishedFilterInput));
    alert(FILTER_APPLIED);
  }, [activeBtn, filterInput]);

  const initFilters = useCallback(() => {
    dispatch(removeFilterInput());
  }, []);

  const filterDetailRenderer = useMemo(() => {
    switch(activeBtn) {
      case 'location':
        return (
          <Location 
            setFilterInput={ setFilterInput }
          />
        );
      case 'keywords':
        return (
          <Keywords 
            setFilterInput={ setFilterInput }
          />
        );
      case 'recommendation':
        return (
          <Recommendation
            setFilterInput={ setFilterInput }
          />
        );
      case 'level':
        return (
          <Level 
            setFilterInput={ setFilterInput }
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
            onClick={ sendFilterInput }
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