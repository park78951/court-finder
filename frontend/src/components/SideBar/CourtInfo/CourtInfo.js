import React from 'react';
import HeaderInfo from './HeaderInfo';
import Style from './CourtInfoStyle';
import PropTypes from 'prop-types';

const CourtInfo = ({ match, children }) => {
  const { path } = match;

  return (
    <Style.CourtInfoWrapper >
      <HeaderInfo />
      {children}
    </Style.CourtInfoWrapper>
  );
};

CourtInfo.propTypes = {
  match: PropTypes.object.isRequired
};

export default React.memo(CourtInfo);