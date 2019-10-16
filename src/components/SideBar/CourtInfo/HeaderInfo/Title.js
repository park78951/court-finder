import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import Style from './TitleStyle';

const Title = ({ searchedInfo }) => {
  return (
    <Style.HeaderTitleStyle>
      <button>
        <MdArrowBack size={35} />
      </button>
      <p>{ searchedInfo ? searchedInfo.locationName : '여의도 농구장' }</p>
    </Style.HeaderTitleStyle>
  );
};

export default Title;