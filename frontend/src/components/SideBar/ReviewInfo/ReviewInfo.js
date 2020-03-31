import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRateReview } from "react-icons/md";
import AllReviews from './AllReviews';
import MyReview from './MyReview';
import { openAddReviewForm, removeReviews, requestAllReviews } from '@actions';
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
  
  const onClickReviewForm = useCallback(() => {
    dispatch(openAddReviewForm());
  }, []);
  
  const onScrollHandler = useCallback(() => {
    const curRefReviewInfo = reviewInfoRef.current;
    if(curRefReviewInfo.scrollHeight - 100 < curRefReviewInfo.scrollTop + curRefReviewInfo.clientHeight) {
      if(hasMoreReviews) {
        dispatch(requestAllReviews({
          courtId: courtId,
          size: 6,
          page: currentPage + 1,
        }));
      }
      setCurrentPage(state => state + 1);
    }
  }, [hasMoreReviews, currentPage]);
  
  useEffect(() => {
    return () => dispatch(removeReviews());
  }, []);

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