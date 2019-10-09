import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import Style from './TitleStyle';

const Title = courtsInfo => {
  const selectedCourt = courtsInfo[0];
  return (
    <Style.HeaderTitleStyle>
      <button>
        <MdArrowBack size={35} />
      </button>
      <h2>{selectedCourt ? selectedCourt.locationName : '여의도 농구장'}</h2>
    </Style.HeaderTitleStyle>
  );
};

export default Title;