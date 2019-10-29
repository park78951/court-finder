import React from 'react';
import InputBar from './InputBar';
import Style from './indexStyle';

const Search = ({ curPath }) => {
  return (
    <Style.SearchContainer curPath={ curPath } >
      <InputBar />
    </Style.SearchContainer>
  );
};

export default Search;