import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { removeFilterInput } from '@actions';
import Style from './HelperNavStyle';

const HelperNav = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goHome = useCallback(() => {
    router.push('/');
  }, []);

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
      <button
        onClick={ goHome }
      >
        홈으로
      </button>
    </Style.HelperNavWrapper>
  );
};

export default React.memo(HelperNav);