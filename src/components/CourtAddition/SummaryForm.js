import React from 'react';
import CustomButton from '../lib/Button';
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
        <CustomButton
          onClick={ movePrev }
        >
          이전
        </CustomButton>
        <CustomButton
          type='submit'
          onSubmit={ submitHandler }
        >
          제출
        </CustomButton>
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