import React from 'react';
// import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdLocationOn, MdInfo, MdAssignment, MdArrowBack } from 'react-icons/md';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 180px;
  width: 100%;
  background-color: orange;
  border: solid 1px #D3D3D3;

  .header-info__title {
    display: flex;
    padding: 10px 0;
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0 20px 0 5px;
      border: none;
      background: transparent;
      cursor: pointer;
    }
    & > h2 {
      display: inline-block;
      flex: 1;
      margin: 0;
    }
  }

  .header-info__address {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    & > div {
      display: inline-block;
      font-weight: bold;
      width: fit-content;
      height: 20px;
    }
    & > p {
      display: inline-block;
      margin: 0;
    }
  }

  .header-info__addition {
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 10px;
  }

  .header-info__select-tab {
    margin-top: 15px;
    & > button {
      display: inline-block;
      border: none;
      padding: 0;
      background: transparent;
      width: 50%;
      cursor: pointer;

      &:active {
        &::after {
          border: 2px solid white;
        }
      }

    }
  }
`;

const HeaderInfo = () => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

export default HeaderInfo;