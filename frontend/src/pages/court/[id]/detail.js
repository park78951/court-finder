import React from 'react';
import BodyInfo from '@components/SideBar/BodyInfo';
import { requestCourt } from '@actions';

const Detail = () => {
  return (
    <>
      <BodyInfo />
    </>
  );
};

Detail.getInitialProps = async context => {
  if(typeof window !== "undefined") return;

  const { store, query } = context;

  store.dispatch(requestCourt(query.id));
  
  return query.id;
};

export default Detail;