import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { MdArrowBack } from 'react-icons/md';
import { iconSize } from '@initConfig';

const GoBackBtn = () => {
  const { headerInfo_goback } = iconSize;
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <button onClick={ goBack }>
      <MdArrowBack size={ headerInfo_goback } />
    </button>
  );
};

export default GoBackBtn;