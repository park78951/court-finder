import React from 'react';
import GoBackBtn from './GoBackBtn';
import Style from './TitleStyle';
import PropTypes from 'prop-types';

const Title = ({ locationName }) => {


  return (
    <Style.HeaderTitleStyle>
      <GoBackBtn />
      <p>{ locationName }</p>
    </Style.HeaderTitleStyle>
  );
};

Title.propTypes = {
  locationName: PropTypes.string
};

export default Title;