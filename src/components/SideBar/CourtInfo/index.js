import React from 'react';
import HeaderInfo from './HeaderInfo';
import BodyInfo from './BodyInfo';
import ReviewInfo from './ReviewInfo';
import { Route } from 'react-router-dom';
import Style from './IndexStyle';

const CourtInfo = ({ match }) => {
  const { path } = match;

  return (
    <Style.CourtInfoWrapper >
      <HeaderInfo />
      <Route path={`${ path }/detail`} component={ BodyInfo } />
      <Route path={`${ path }/review`} component={ ReviewInfo } />
    </Style.CourtInfoWrapper>
  );
};

CourtInfo.defaultProps = {
  isSelected: false
};

export default CourtInfo;