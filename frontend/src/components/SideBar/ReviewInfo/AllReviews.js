import React from 'react';
import UserReview from './UserReview';
import Style from './AllReviewStyle';
import PropTypes from 'prop-types';

const AllReviews = ({ reviews }) => {
  return (
    <>
      <Style.CommentsHeader>
        <h2>모든 리뷰</h2>
      </Style.CommentsHeader>
      <Style.AllReviews>
        {reviews.map((review, idx)=> (
          <UserReview 
            key={idx}
            nickname={review.writer}
            contents={review.text}
            createdAt={reviews.createdAt}
          />)
        )}
      </Style.AllReviews>
    </>
  );
};

AllReviews.propTypes = {
  reviews: PropTypes.array,
}

export default AllReviews;