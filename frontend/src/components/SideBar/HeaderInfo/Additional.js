import React from 'react';
import PropTypes from 'prop-types';
import Style from './AdditionalStyle';

const Additional = ({ ratings }) => {
  const ratingInfo = () => {
    return ratings ? (
      <span>4.7 / 5  추천수 304  뜨거운 코트</span>
    ) : (
      <span>아직 코트가 평가되지 않았습니다.</span>
    );
  };

  return (
    <Style.AdditionalStyle>
      { ratingInfo() }
    </Style.AdditionalStyle>
  );
};

Additional.defaultProps = {
  ratings: null
};

Additional.propTypes = {
  ratings: PropTypes.string
};

export default Additional;