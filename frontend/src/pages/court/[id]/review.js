import React from 'react';
import ReviewInfo from '@components/SideBar/ReviewInfo';
import { requestCourt, requestAllReviews } from '@actions';

const Review = () => {
  return (
    <>
      <ReviewInfo />
    </>
  );
};

Review.getInitialProps = async context => {
  const { store, query } = context;

  if(context.isServer) {
    store.dispatch(requestCourt(query.id));
  }

  store.dispatch(requestAllReviews({
    courtId: query.id,
    size: 6,
  }));
}

export default Review;