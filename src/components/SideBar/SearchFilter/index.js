import React from 'react';
import { MdExpandMore } from 'react-icons/lib/md';
import Style from './indexStyle';

const SearchFilter = () => {
  return (
    <Style.MenuWrapper>
      <button className='filter__types'>지역별</button>
      <button className='filter__types'>키워드별</button>
      <button className='filter__types'>유저추천</button>
      <button className='filter__types'>수준별</button>
      <button className='filter__dropdown'>
        <MdExpandMore 
          size={ 40 }
          className='filter__dropdown--icon'
        />
      </button>
    </Style.MenuWrapper>
  );
};

export default SearchFilter;