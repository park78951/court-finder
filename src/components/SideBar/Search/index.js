import React from 'react';
import Input from './Input';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  background-color: white;
  width: 100%;
  height: 60px;
  border: solid 1px #D3D3D3;
`;

const Search = () => {
  return (
    <SearchContainer>
      <Input />
    </SearchContainer>
  );
};

export default Search;