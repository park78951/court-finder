import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 220px;
  width: 100%;
  background-color: orange;
  border: solid 1px #D3D3D3;
`;

const HeaderInfo = () => {
  return (
    <HeaderWrapper>
      <div>
        <div>뒤로</div>
        <h2>웨스트 코스트 농구장</h2>
      </div>
      <p>부산광역시 해운대구 해운대 앞 바다에 없다.</p>
      <span>4.7 / 5</span>  <span>추천수 304</span>  <span>뜨거운 코트</span>
      <div>
        <div>정보</div>
        <div>리뷰</div>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderInfo;