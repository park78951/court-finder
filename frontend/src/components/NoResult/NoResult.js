import React from 'react';
import { useSelector } from 'react-redux';
import Style from './NoResultStyle';

const NoResult = () => {
  const { userInput } = useSelector(state => state.storeOnInput);
  
  return (
    <Style.NoResultWrapper>
      <p>
        <span>{ userInput }</span>에 대한 검색 결과가 없습니다.
      </p>
    </Style.NoResultWrapper>
  );
};

export default NoResult;