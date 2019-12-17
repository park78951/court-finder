import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFilterData } from '../../../actions';
import { withRouter } from 'react-router-dom';
import Style from './indexStyle';

const HelperNav = ({ history }) => {
  const dispatch = useDispatch();

  const goHome = () => {
    history.push('/');
  };

  const initializeFilter = () => {
    dispatch(removeFilterData());
    alert('필터를 초기화했습니다.');
  };

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

export default withRouter(React.memo(HelperNav));