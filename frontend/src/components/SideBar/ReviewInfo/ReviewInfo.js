import React from 'react';
import { MdRateReview } from "react-icons/md";
import PropTypes from 'prop-types';
import UserReview from './UserReview';
import Style from './ReviewInfoStyle';

const ReviewInfo = ({
  myNickname, 
  myContent, 
  allReviews,
}) => {
  return (
    <Style.ReviewInfoWrapper>
      <Style.CommentsHeader>
        <h2>내가 작성한 리뷰</h2>
      </Style.CommentsHeader>
      <Style.MyReview>
        <UserReview 
          nickname={'쌍큐'}
          contents={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />
        <Style.AddReviewBtn>
          <button> <MdRateReview size={20} /> <span>리뷰 작성</span></button>
        </Style.AddReviewBtn>
      </Style.MyReview>
      <Style.CommentsHeader>
        <h2>모든 리뷰</h2>
      </Style.CommentsHeader>
      <Style.AllReviews>
        {new Array(5).fill(0).map( (_, idx)=> (
          <UserReview 
            key={idx}
            nickname={'쌍큐'}
            contents={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          />)
        )}
      </Style.AllReviews>
    </Style.ReviewInfoWrapper>
  );
};

ReviewInfo.propTypes = {
  myNickname: PropTypes.string,
  myContent: PropTypes.string,
  allReviews: PropTypes.array,
}

export default React.memo(ReviewInfo);