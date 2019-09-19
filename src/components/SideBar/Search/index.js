import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import { defaultStyle } from '../../../config';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  background-color: white;
  width: 100%;
  height: 60px;
  border: solid 1px ${ ({ linearColor }) => linearColor ? linearColor : '#D3D3D3' };
`

const Search = () => {
  const { sideBar } = defaultStyle
  return (
    <SearchContainer borderColor={{ sideBar }} >
      <Input />
    </SearchContainer>
  )
}

export default Search;