import React from 'react';
import Photos from './PhotosStyle';
import UserReviews from './UserReviews';
import Style from './indexStyle';

const ReviewInfo = () => {
  return (
    <Style.ReviewInfoWrapper>
      <Photos />
      <h2>코트 리뷰</h2>
      <UserReviews />
    </Style.ReviewInfoWrapper>
  );
};

export default React.memo(ReviewInfo);