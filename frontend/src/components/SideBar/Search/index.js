import React from 'react';
import InputBar from './InputBar';
import Style from './indexStyle';

const Search = () => {
  return (
    <Style.SearchContainer >
      <InputBar />
    </Style.SearchContainer>
  );
};

export default React.memo(Search);