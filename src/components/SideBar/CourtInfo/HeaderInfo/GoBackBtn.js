import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdArrowBack } from 'react-icons/lib/md';
import { selectCourt } from '../../../../actions';
import { iconSize } from '../../../../config/initConfig';

const GoBackBtn = ({ history }) => {
  const { headerInfo_goback } = iconSize;
  const dispatch = useDispatch();

  const goBack = useCallback(() => {
    history.goBack();
    dispatch(selectCourt());
  }, []);

  return (
    <button onClick={ goBack }>
      <MdArrowBack size={ headerInfo_goback } />
    </button>
  );
};

export default withRouter(GoBackBtn);