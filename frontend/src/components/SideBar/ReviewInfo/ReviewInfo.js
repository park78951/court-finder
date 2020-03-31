import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRateReview } from "react-icons/md";
import AllReviews from './AllReviews';
import MyReview from './MyReview';
import { openAddReviewForm, removeReviews, requestAllReviews } from '@actions';
import { iconSize, infiniteScroll } from '@config';
import Style from './ReviewInfoStyle';

const ReviewInfo = ({ courtId, page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const { allReviewData, myReview, hasMoreReviews, nickname } = useSelector(state => ({
    allReviewData: state.review.allReviews,
    myReview: state.review.myReview,
    hasMoreReviews: state.review.hasMoreReviews,
    nickname: state.user.nickname,
  }));
  const dispatch = useDispatch();
  const reviewInfoRef = useRef();
  const timer = useRef();
  
  const onClickReviewForm = useCallback(() => {
    dispatch(openAddReviewForm());
  }, []);

  useEffect(() => {
    return () => dispatch(removeReviews());
  }, []);

  const onScrollHandler = useCallback(() => {
    if(timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      const curRefReviewInfo = reviewInfoRef.current;
      if(curRefReviewInfo.scrollHeight - infiniteScroll.scrollDiff < curRefReviewInfo.scrollTop + curRefReviewInfo.clientHeight) {
        if(hasMoreReviews) {
          dispatch(requestAllReviews({
            courtId: courtId,
            page: currentPage + 1,
          }));
        }
        setCurrentPage(state => state + 1);
      }
    }, infiniteScroll.debouncerDelay);
  }, [hasMoreReviews, currentPage]);

  return (
    <Style.ReviewInfoWrapper ref={reviewInfoRef} onScroll={onScrollHandler}>
      <Style.ReviewHeader>
        {myReview && (
          <MyReview 
            nickname={nickname}
            myReview={myReview}
          />
        )}
        <Style.AddReviewBtn>
          <button onClick={onClickReviewForm}> 
            <MdRateReview size={iconSize.review_addition} /> <span>리뷰 작성</span>
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