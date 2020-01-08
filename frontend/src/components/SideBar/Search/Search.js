import React from 'react';
import InputBar from './InputBar';
import Style from './SearchStyle';

const Search = () => {
  return (
    <Style.SearchContainer >
      <InputBar />
    </Style.SearchContainer>
  );
};

export default React.memo(Search);