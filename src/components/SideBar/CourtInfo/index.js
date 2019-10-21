import React from 'react';
import HeaderInfo from './HeaderInfo';
import BodyInfo from './BodyInfo';
import Style from './IndexStyle';

const CourtInfo = () => {
  return (
    <Style.CourtInfoWrapper >
      <HeaderInfo />
      <BodyInfo />
    </Style.CourtInfoWrapper>
  );
};

CourtInfo.defaultProps = {
  isSelected: false
};

export default CourtInfo;