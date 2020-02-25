import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { removeFilterInput } from '@actions';
import Style from './HelperNavStyle';

const HelperNav = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const initializeFilter = useCallback(() => {
    dispatch(removeFilterInput());
    alert('필터를 초기화했습니다.');
  }, []);
  
  const goHome = useCallback(() => {
    dispatch(removeFilterInput());
    router.push('/');
  }, []);
  
  return (
    <Style.HelperNavWrapper>
      <button
        onClick={ initializeFilter }
      >
        필터 초기화
      </button>
      <button
        onClick={ goHome }
      >
        홈으로
      </button>
    </Style.HelperNavWrapper>
  );
};

export default React.memo(HelperNav);