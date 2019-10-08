import React from 'react';
// import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdLocationOn, MdInfo, MdAssignment, MdArrowBack } from 'react-icons/md';
import Style from './HeaderInfoStyle';

const HeaderInfo = () => {
  return (
    <Style.HeaderWrapper>
      <div className='header-info__title'>
        <button>
          <MdArrowBack size={35} />
        </button>
        <h2>웨스트 코스트 농구장</h2>
      </div>
      <div className='header-info__address'>
        <div><MdLocationOn size={20} /></div>
        <p> 부산광역시 해운대구 해운대 앞 바다에 없다.</p>
      </div>
      <div className='header-info__addition'>
        <span>4.7 / 5</span>  <span>추천수 304</span>  <span>뜨거운 코트</span>
      </div>
      <div className='header-info__select-tab'>
        <button>
          <MdInfo size={40} />
        </button>
        <button>
          <MdAssignment size={40} />
        </button>
      </div>
    </Style.HeaderWrapper>
  );
};

export default HeaderInfo;