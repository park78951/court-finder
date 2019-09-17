import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 420px;
  height: 60px;
  border: solid 1px #696969;
`

const Search = () => {
  return (
    <SearchContainer>
      <Input />
    </SearchContainer>
  )
}

export default Search;