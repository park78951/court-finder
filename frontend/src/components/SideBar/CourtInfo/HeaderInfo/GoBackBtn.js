import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdArrowBack } from 'react-icons/md';
import { selectCourt } from '../../../../actions';
import { iconSize } from '../../../../config/initConfig';

const GoBackBtn = () => {
  const { headerInfo_goback } = iconSize;
  const dispatch = useDispatch();
  const history = useHistory();

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

export default GoBackBtn;