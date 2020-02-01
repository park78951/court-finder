import React from 'react';
import PropTypes from 'prop-types';
import GoBackBtn from './GoBackBtn';
import Style from './TitleStyle';

const Title = ({ name }) => {
  return (
    <Style.HeaderTitleStyle>
      <GoBackBtn />
      <p>{ name }</p>
    </Style.HeaderTitleStyle>
  );
};

Title.propTypes = {
  locationName: PropTypes.string
};

export default Title;