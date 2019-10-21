import React from 'react';
import HeaderInfo from './HeaderInfo';
import BodyInfo from './BodyInfo';
import { Route } from 'react-router-dom';
import Style from './IndexStyle';

const CourtInfo = () => {
  return (
    <Style.CourtInfoWrapper >
      <HeaderInfo />
      <Route path='/' component={ BodyInfo } />
    </Style.CourtInfoWrapper>
  );
};

CourtInfo.defaultProps = {
  isSelected: false
};

export default CourtInfo;