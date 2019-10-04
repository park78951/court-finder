import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { createUniqueKey } from '../../../helper/myUtil';
import { MdLanguage,  } from 'react-icons/md';
import styled from 'styled-components';

const BodyInfoWrapper = styled.div`
  flex: 1;
  width: 100%;
  border: #D3D3D3;

  & > ul {
    display: flex;
    justify-content: start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;

    & > li {
      display: inline-block;
      margin-left: 10px;
      padding: 3px;
      border: 1px solid #D3D3D3;
      border-radius: 5px;
    }
  }
`;

const BodyInfo = () => {
  const { courtsData } = useContext(CourtContext);
  const courtsInfo = courtsData.courtsInfo;

  const tagCollection = useMemo(() => {
    if(!courtsInfo.length) return;
    const { tags } = courtsInfo[0];
    return tags.map( tag => {
      return <li key={ createUniqueKey() }>{ tag }</li>;
    });
  }, [courtsData]);

  const renderOnData = () => {
    const {
      web,
      phone,
      fee,
      indoorOutdoor,
      availableTime,
      transportation,
      parkingLot,
    } = courtsInfo[0];
    return (
      <>
        <div>
          <MdLanguage />
          <a href={ web } target="_blank">{ web }</a>
        </div>
        <p>전화번호: { phone }</p>
        <p>요금: { fee.amount } / { fee.time }</p>
        <p>실내여부: { indoorOutdoor }</p>
        <p>개방시간: { availableTime.open } ~ { availableTime.close }</p>
        <p>교통: { transportation.stop } - { transportation.method } { transportation.stop }</p>
        <p>주차장: {parkingLot ? '있음' : '없음'}</p>
        <ul><span>Tag: </span>{ tagCollection }</ul>
      </>
    );
  };

  return courtsInfo && (
    <BodyInfoWrapper>
      { courtsInfo.length ? renderOnData() : '데이터없음' }
    </BodyInfoWrapper>
  );
};

export default BodyInfo;