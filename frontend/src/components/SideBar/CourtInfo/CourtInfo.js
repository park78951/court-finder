import React from 'react';
import HeaderInfo from './HeaderInfo';
import BodyInfo from './BodyInfo/BodyInfo';
import ReviewInfo from './ReviewInfo';
import { Route } from 'react-router-dom';
import Style from './CourtInfoStyle';
import PropTypes from 'prop-types';

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

CourtInfo.propTypes = {
  match: PropTypes.object.isRequired
};

export default React.memo(CourtInfo);