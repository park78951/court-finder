import React from 'react';
import Photos from './Photos';
import UserReviews from './UserReviews';
import Style from './ReviewInfoStyle';

const ReviewInfo = () => {
  return (
    <Style.ReviewInfoWrapper>
      <h2>사진정보</h2>
      <Photos />
      <h2>코트리뷰</h2>
      <UserReviews />
    </Style.ReviewInfoWrapper>
  );
};

export default React.memo(ReviewInfo);