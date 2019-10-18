import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const GoBackBtn = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <button onClick={ goBack }>
      <MdArrowBack size={35} />
    </button>
  );
};

export default withRouter(GoBackBtn);