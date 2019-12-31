import React from 'react';
import Style from './ReviewStyle';

const Review = () => {
  return (
    <Style.ReviewContent>
      <div>
        <h3>부산의 메인코트</h3>
        <div>
          <span>Rating</span>
          <span>4.0 / 5</span>
        </div>
      </div>
      <p>그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는...</p>
    </Style.ReviewContent>
  );
};

export default Review;