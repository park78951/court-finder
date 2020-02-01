import React from 'react';
import Profile from './Profile';
import ReviewPost from './ReviewPost';
import Style from './UserReviewStyle';

const UserReview = () => {
  return (
    <Style.UserReviewWrapper>
      <Profile />
      <hr />
      <ReviewPost />
    </Style.UserReviewWrapper>
  );
};

export default UserReview;