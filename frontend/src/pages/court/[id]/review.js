import React from 'react';
import ReviewInfo from '@components/SideBar/ReviewInfo';
import { requestCourt } from '@actions';

const Review = () => {
  return (
    <>
      <ReviewInfo />
    </>
  );
};

Review.getInitialProps = async context => {
  if(typeof window !== "undefined") return;

  const { store, query } = context;

  store.dispatch(requestCourt(query.id));
  
  return query.id;
}

export default Review;