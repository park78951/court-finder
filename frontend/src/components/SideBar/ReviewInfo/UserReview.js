import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Style from './UserReviewStyle';

const UserReview = ({nickname, contents}) => {
  const [isContentsFolded, setIsContentsFolded] = useState()
  
  const onClickMoreView = useCallback(() => {
    console.log('클릭')
  }, []);

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
        {!isContentsFolded && (
          <div onClick={onClickMoreView}>
            +더보기
          </div>
        )}
      </Style.ReviewContents>
    </Style.UserReviewWrapper>
  );
};

UserReview.propTypes = {
  nickname: PropTypes.string,
  contents: PropTypes.string,
}

export default React.memo(UserReview);