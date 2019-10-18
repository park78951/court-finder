import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import Style from './TitleStyle';
import PropTypes from 'prop-types';

const Title = ({ locationName }) => {
  return (
    <Style.HeaderTitleStyle>
      <button>
        <MdArrowBack size={35} />
      </button>
      <p>{ locationName ? locationName : '여의도 농구장' }</p>
    </Style.HeaderTitleStyle>
  );
};

Title.PropTypes = {
  locationName: PropTypes.string
};

export default Title;