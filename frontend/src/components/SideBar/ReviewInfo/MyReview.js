import React from 'react';
import UserReview from './UserReview';
import Style from './MyReviewStyle';

const MyReview = ({ nickname, myReview }) => {
  return (
    <>
      <Style.CommentsHeader>
        <h2>내가 작성한 리뷰</h2>
      </Style.CommentsHeader>
      <Style.MyReview>
        {myReview && (
          <UserReview 
            nickname={nickname}
            contents={myReview.text}
            createdAt={myReview.createdAt}
          />
        )}
      </Style.MyReview>
    </>
  );
};

export default React.memo(MyReview);