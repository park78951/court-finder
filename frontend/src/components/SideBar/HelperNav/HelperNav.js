import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeFilterData } from '../../../actions';
import { withRouter } from 'react-router-dom';
import Style from './HelperNavStyle';

const HelperNav = ({ history }) => {
  const dispatch = useDispatch();

  const goHome = useCallback(() => {
    history.push('/');
  }, []);

  const initializeFilter = useCallback(() => {
    dispatch(removeFilterData());
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

export default React.memo(withRouter(HelperNav));