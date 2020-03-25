import React, { useState, useCallback, useRef } from 'react';
import { UserProfile } from '@components/lib';
import PropTypes from 'prop-types';
import Style from './UserReviewStyle';

const UserReview = ({nickname, contents, createdAt}) => {
  const [isContentFolded, setIsContentFolded] = useState(false);
  const contentRef = useRef();
  
  const onClickMoreView = useCallback(() => {
    setIsContentFolded(true);
    contentRef.current.style.display = 'block';
    contentRef.current.style.webkitLineClamp = 'clip';
    contentRef.current.style.webkitBoxOrient = 'horizontal';
  }, []);

  return (
    <Style.UserReviewWrapper>
      <UserProfile nickname={nickname} />
      <Style.ReviewContents>
        <p>{createdAt}</p>
        <p ref={contentRef}>{contents}</p>
        {!isContentFolded && (
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