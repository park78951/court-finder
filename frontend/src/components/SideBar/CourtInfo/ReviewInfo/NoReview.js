import React from 'react';
import Style from './NoReviewStyle';

const NoReview = () => {
  return (
    <Style.NoReviewWrapper>
      <p>리뷰 정보 없음</p>
    </Style.NoReviewWrapper>
  );
};

export default React.memo(NoReview);