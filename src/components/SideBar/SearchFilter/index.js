import React from 'react';
import Style from './indexStyle';

const SearchFilter = () => {
  return (
    <Style.FilterWrapper>
      <button>지역별</button>
      <button>키워드별</button>
      <button>유저추천</button>
      <button>수준별</button>
      <button>extends</button>
    </Style.FilterWrapper>
  );
};

export default SearchFilter;