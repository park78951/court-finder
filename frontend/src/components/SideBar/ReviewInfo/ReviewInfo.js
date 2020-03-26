import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRateReview } from "react-icons/md";
import AllReviews from './AllReviews';
import MyReview from './MyReview';
import { openAddReviewForm, removeReviews } from '@actions';
import Style from './ReviewInfoStyle';

const ReviewInfo = () => {
  const dispatch = useDispatch();
  const { allReviewData, myReview, nickname } = useSelector((state) => ({
    allReviewData: state.review.allReviews,
    myReview: state.review.myReview,
    nickname: state.user.nickname,
  }));
  
  const onClickAddReview = useCallback(() => {
    dispatch(openAddReviewForm());
  }, []);

  useEffect(() => {
    return () => dispatch(removeReviews());
  }, []);

  return (
    <Style.ReviewInfoWrapper>
      <Style.ReviewHeader>
        {myReview && (
          <MyReview 
            nickname={nickname}
            myReview={myReview}
          />
        )}
        <Style.AddReviewBtn>
          <button onClick={onClickAddReview}> 
            <MdRateReview size={20} /> <span>리뷰 작성</span>
          </button>
        </Style.AddReviewBtn>
      </Style.ReviewHeader>
      {allReviewData.length > 0 && (
        <AllReviews reviews={allReviewData} />
      )}
    </Style.ReviewInfoWrapper>
  );
};

export default React.memo(ReviewInfo);