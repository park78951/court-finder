import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeFilterInput } from '@actions';
import Style from './HelperNavStyle';

const HelperNav = () => {
  const dispatch = useDispatch();
  
  const initializeFilter = useCallback(() => {
    dispatch(removeFilterInput());
    alert('필터를 초기화했습니다.');
  }, []);
  
  return (
    <Style.HelperNavWrapper>
      <button
        onClick={ initializeFilter }
      >
        필터 초기화
      </button>
    </Style.HelperNavWrapper>
  );
};

export default React.memo(HelperNav);