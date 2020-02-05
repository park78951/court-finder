import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import BodyInfo from '@components/SideBar/BodyInfo';
import Loader from '@components/Loader';
import { requestCourt } from '@actions';

const Detail = () => {
  const { selectedCourt } = useSelector(({ courtStore }) => courtStore);
  const dispatch = useDispatch();
  const { route, query } = useRouter();
  
  useEffect(() => {
    const { id } = query;
    if(route.startsWith('/court') && !selectedCourt) {
      dispatch(requestCourt(id));
    }
  }, []);

  return (
    <>
      {selectedCourt ? <BodyInfo /> : <Loader />}
    </>
  );
};

export default Detail;