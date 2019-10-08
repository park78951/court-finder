import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { createUniqueKey } from '../../../helper/myUtil';
import { MdLanguage,  } from 'react-icons/md';
import Style from './BodyInfoStyle';

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
    <Style.BodyInfoWrapper>
      { courtsInfo.length ? renderOnData() : '데이터없음' }
    </Style.BodyInfoWrapper>
  );
};

export default BodyInfo;