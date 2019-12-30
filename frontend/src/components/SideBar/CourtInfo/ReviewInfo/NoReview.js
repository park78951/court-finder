import React from 'react';
import Style from './UserReviewStyle';

const NoReview = () => {
  return (
    <Style.UserReviewWrapper noReview={ true }>
      <p>리뷰 정보 없음</p>
    </Style.UserReviewWrapper>
  );
};

export default NoReview;