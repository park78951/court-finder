import React from 'react';
import { Button } from '../lib';
import PropTypes from 'prop-types';

const SummaryForm = ({ 
  submitHandler, 
  movePrev,
  addedInfo,
}) => {

  const summaryList = () => {
    return Object.keys(addedInfo).map(infoKey => {
      return <p key={ infoKey }>{infoKey}: {addedInfo[infoKey]}</p>;
    });
  };

  return (
    <div>
      <div>
        { summaryList() }
      </div>
      <div>
        <Button
          onClick={ movePrev }
        >
          이전
        </Button>
        <Button
          type='submit'
          onSubmit={ submitHandler }
        >
          제출
        </Button>
      </div>
    </div>
  );
};

SummaryForm.propTypes = {
  submitHandler: PropTypes.func,
  movePrev: PropTypes.func,
  addedInfo: PropTypes.object
};

export default SummaryForm;