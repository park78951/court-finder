import React from 'react';
import Reviewinfo from '@components/SideBar/ReviewInfo';
import Loader from '@components/Loader';
import { useFetchCourt } from '@hooks';

const Review = () => {
  const { selectedCourt } = useFetchCourt();

  return (
    <>
      {selectedCourt ? <Reviewinfo /> : <Loader />}
    </>
  );
};

export default Review;