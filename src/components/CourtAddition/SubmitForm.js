import React from 'react';
import CustomButton from '../lib/Button';
import { INFO_CONSTANTS } from '../../config/constants';

const SummaryFrom = ({ submitHandler, courtInfo }) => {

  const summaryList = () => {
    return Object.keys(courtInfo).map(infoKey => {
      const infoName = INFO_CONSTANTS[infoKey];
      return <p key={ infoKey }>{infoName}: {courtInfo[infoKey]}</p>;
    });
  };

  return (
    <div>
      <div>
        { summaryList }
      </div>
      <div>
        <CustomButton>
          이전
        </CustomButton>
        <CustomButton
          onSubmit={ submitHandler }
        >
          제출
        </CustomButton>
      </div>
    </div>
  );
};

export default React.memo(SummaryFrom);