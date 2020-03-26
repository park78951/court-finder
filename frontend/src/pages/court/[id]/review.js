import React from 'react';
import ReviewInfo from '@components/SideBar/ReviewInfo';
import { 
  requestCourt, 
  requestAllReviews,
  requestMyReview,
} from '@actions';

const Review = () => {
  return (
    <>
      <ReviewInfo />
    </>
  );
};

Review.getInitialProps = async context => {
  const { store, query, req } = context;

  if(context.isServer) {
    store.dispatch(requestCourt(query.id));
  }
  
  if(store.getState().user.nickname || req.user) {
    store.dispatch(requestMyReview({
      courtId: query.id,
    }));
  }

  store.dispatch(requestAllReviews({
    courtId: query.id,
    size: 6,
    page: 1,
  }));
};

export default Review;