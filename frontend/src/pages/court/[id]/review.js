import React from 'react';
import ReviewInfo from '@components/SideBar/ReviewInfo';
import { 
  requestCourt, 
  requestAllReviews,
  requestMyReview,
} from '@actions';

const Review = ({ courtId, page }) => {
  return (
    <>
      <ReviewInfo courtId={courtId} page={page} />
    </>
  );
};

Review.getInitialProps = async context => {
  const { store, query, req } = context;

  if(context.isServer) {
    store.dispatch(requestCourt(query.id));
  }
  
  if(store.getState().user || req.user) {
    store.dispatch(requestMyReview({
      courtId: query.id,
    }));
  }

  store.dispatch(requestAllReviews({
    courtId: query.id,
    page: 1,
  }));

  return {courtId: query.id, page: 1};
};

export default Review;