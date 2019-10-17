import React from 'react';
import styled from 'styled-components';

const CourtItemWrapper = styled.div`
  width: 100%;
  height: 15vh;
  box-sizing: border-box;
  border: solid 1px #D3D3D3;

  & > h2 {
    display: inline-block;
    margin: 0;
  }
  
  & > span {
    display: inline-block;
    color: #383838;
    font-size: 1.1rem;
  }

  & > p {
    margin: 0;
  }
`;

const CourtItem = ({ locationName, address, in_out, phone }) => {
  return (
    <CourtItemWrapper>
      <h2>{ locationName }</h2>   <span>{in_out}</span>
      <p>주소: { address }</p>
      <p>전화번호: 02-{ phone }</p>
    </CourtItemWrapper>
  );
};

export default CourtItem;