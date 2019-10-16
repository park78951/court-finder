import React from 'react';
import CustomButton from '../lib/Button';

const SummaryForm = ({ 
  submitHandler, 
  courtAdditionFlag, 
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

export default React.memo(SummaryForm);