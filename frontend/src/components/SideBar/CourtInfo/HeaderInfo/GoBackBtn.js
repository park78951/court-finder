import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { MdArrowBack } from 'react-icons/md';
import { selectCourt } from '../../../../actions';
import { iconSize } from '@initConfig';

const GoBackBtn = () => {
  const { headerInfo_goback } = iconSize;
  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
    dispatch(selectCourt());
  }, []);

  return (
    <button onClick={ goBack }>
      <MdArrowBack size={ headerInfo_goback } />
    </button>
  );
};

export default GoBackBtn;