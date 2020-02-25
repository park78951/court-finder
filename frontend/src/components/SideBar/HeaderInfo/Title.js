import React from 'react';
import PropTypes from 'prop-types';
import Style from './TitleStyle';

const Title = ({ name }) => {
  return (
    <Style.HeaderTitleStyle> 
      <p>{ name }</p>
    </Style.HeaderTitleStyle>
  );
};

Title.propTypes = {
  locationName: PropTypes.string
};

export default Title;