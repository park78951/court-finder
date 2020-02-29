import React from 'react';
import PropTypes from 'prop-types';
import Style from './UserReviewStyle';

const UserReview = ({nickname, contents}) => {
  return (
    <Style.UserReviewWrapper>
      <Style.UserProfile>
        <Style.UserProfileAvatar>
          {nickname[0]}
        </Style.UserProfileAvatar>
        <Style.UserProfileNickname>
          {nickname}
        </Style.UserProfileNickname>
      </Style.UserProfile>
      <Style.ReviewContents>
        <span>{contents}</span>
      </Style.ReviewContents>
    </Style.UserReviewWrapper>
  );
};

UserReview.propTypes = {
  nickname: PropTypes.string,
  contents: PropTypes.string,
}

export default UserReview;