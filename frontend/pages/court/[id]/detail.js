import React from 'react';
import BodyInfo from '@components/SideBar/BodyInfo';
import Loader from '@components/Loader';
import { useFetchCourt } from '@hooks';

const Detail = () => {
  const { selectedCourt } = useFetchCourt();

  return (
    <>
      {selectedCourt ? <BodyInfo /> : <Loader />}
    </>
  );
};

export default Detail;