import React from 'react';
import Profile from './Profile';
import Review from './Review';
import Style from './UserReviewStyle';

const UserReview = () => {
  return (
    <Style.UserReviewWrapper>
      <Profile />
      <hr />
      <Review />
    </Style.UserReviewWrapper>
  );
};

export default UserReview;