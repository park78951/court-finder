import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRateReview, MdDelete } from "react-icons/md";
import AllReviews from './AllReviews';
import MyReview from './MyReview';
import { 
  openAddReviewForm, 
  emptyReviews, 
  requestAllReviews, 
  openReviewDeleter ,
  requestLogin, 
  failLogin,
} from '@actions';
import { loginByKakao } from '@myUtils';
import { iconSize, infiniteScroll } from '@config';
import Style from './ReviewInfoStyle';

const ReviewInfo = ({ courtId, page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const { 
    allReviewData, 
    myReview, 
    hasMoreReviews, 
    nickname,
    isLoggingIn,
  } = useSelector(state => ({
    allReviewData: state.review.allReviews,
    myReview: state.review.myReview,
    hasMoreReviews: state.review.hasMoreReviews,
    nickname: state.user.nickname,
    isLoggingIn: state.user.isLoggingIn,
  }));
  const dispatch = useDispatch();
  const reviewInfoRef = useRef();
  const timer = useRef();
  
  const onClickAddReview = useCallback(() => {
    if(isLoggingIn) {
      return;
    } else if(!nickname) {
      loginByKakao({dispatch, action: {requestLogin, failLogin}});
    } else {
      dispatch(openAddReviewForm());
    }
  }, [nickname]);
  
  const onClickDeleteReview = useCallback(() => {
    dispatch(openReviewDeleter());
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

  useEffect(() => {
    return () => dispatch(emptyReviews());
  }, []);

  return (
    <Style.ReviewInfoWrapper ref={reviewInfoRef} onScroll={onScrollHandler}>
      <Style.ReviewHeader>
        {nickname && myReview && (
          <MyReview 
            nickname={nickname}
            myReview={myReview}
          />
        )}
        <Style.ReviewButtons>
          {!myReview && (
            <Style.AddButton onClick={onClickAddReview}> 
              <MdRateReview size={iconSize.review} /> <span>리뷰 작성</span>
            </Style.AddButton>
          )}
          {myReview && (
            <Style.DeleteButton onClick={onClickDeleteReview}> 
              <MdDelete size={iconSize.review} /> <span>리뷰 삭제</span>
            </Style.DeleteButton>
          )}
        </Style.ReviewButtons>
      </Style.ReviewHeader>
      {allReviewData.length > 0 && (
        <AllReviews reviews={allReviewData} />
      )}
    </Style.ReviewInfoWrapper>
  );
};

export default React.memo(ReviewInfo);