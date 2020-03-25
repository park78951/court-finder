import React, { useState, useCallback, useRef } from 'react';
import { UserProfile } from '@components/lib';
import PropTypes from 'prop-types';
import Style from './UserReviewStyle';

const UserReview = ({nickname, contents, createdAt}) => {
  const [isContentFolded, setIsContentFolded] = useState(false);
  const contentRef = useRef();
  
  const onClickMoreView = useCallback(() => {
    console.log(createdAt);
    setIsContentFolded(true);
    contentRef.current.style.display = 'block';
    contentRef.current.style.webkitLineClamp = 'clip';
    contentRef.current.style.webkitBoxOrient = 'horizontal';
  }, []);

  return (
    <Style.UserReviewWrapper>
      <UserProfile nickname={nickname} />
      <Style.ReviewContents>
        <Style.DateWrapper>{createdAt}</Style.DateWrapper>
        <Style.ContentsWrapper ref={contentRef}>{contents}</Style.ContentsWrapper>
        {contents.length > 200 
          &&!isContentFolded 
          && (
            <div onClick={onClickMoreView}>
              +더보기
            </div>
        )}
      </Style.ReviewContents>
    </Style.UserReviewWrapper>
  );
};

UserReview.propTypes = {
  nickname: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default React.memo(UserReview);