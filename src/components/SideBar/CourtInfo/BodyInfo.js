import React from 'react';
import { defaultStyle } from '../../../config';
import styled from 'styled-components';

const BodyInfoWrapper = styled.div`
  flex: 1;
  width: 100%;
  border: solid 1px ${ ({ linearColor }) => linearColor ? linearColor : '#D3D3D3' };
`

const BodyInfo = () => {
  const { linearColor } = defaultStyle

  return (
    <BodyInfoWrapper>
      <a href='https://www.google.com' target="_blank">www.google.com</a>
      <p>Phone: 02-4444-4444</p>
      <p>$3 per hour</p>
      <p>Outdoor</p>
      <p>8:00 ~ 23:00</p>
      <p>해운대역 - 부산 1호선 3분 거리</p>
      <p>주차장 없음</p>
      <p>Tag: <span>부산농구장</span> <span>부산중심</span></p>
    </BodyInfoWrapper>
  )
}

export default BodyInfo;