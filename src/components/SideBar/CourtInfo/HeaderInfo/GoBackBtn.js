import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/lib/md';
import { iconSize } from '../../../../config/initConfig';

const GoBackBtn = ({ history }) => {
  const { headerInfo_goback } = iconSize;

  const goBack = () => {
    history.goBack();
  };

  return (
    <button onClick={ goBack }>
      <MdArrowBack size={ headerInfo_goback } />
    </button>
  );
};

export default withRouter(GoBackBtn);