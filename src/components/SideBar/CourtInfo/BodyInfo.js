import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { createUniqueKey } from '../../../helper/myUtil';
import { 
  MdLanguage,
  MdPhone,
  MdAttachMoney,
  MdHome,
  MdAccessTime,
  MdDirectionsTransit,
  MdLocalParking,
  MdLabel
} from 'react-icons/md';
import Style from './BodyInfoStyle';

const BodyInfo = () => {
  const { courtsInfo } = useContext(CourtContext);
  
  const tagCollection = useMemo(() => {
    if(!courtsInfo.length) return;
    const { tags } = courtsInfo[0];
    return tags.map( tag => {
      return <li key={ createUniqueKey() }>{ tag }</li>;
    });
  }, [courtsInfo]);

  const renderOnData = size => {
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
          <MdLanguage size={ size } />
          <a href={ web } target="_blank">{ web }</a>
        </div>
        <div>
          <MdPhone size={ size } />
          <span>전화번호: { phone }</span>
        </div>
        <div>
          <MdAttachMoney size={ size } />
          <span>요금: { fee.amount } / { fee.time }</span>
        </div>
        <div>
          <MdHome size={ size } />
          <span>실내여부: { indoorOutdoor }</span>
        </div>
        <div>
          <MdAccessTime size={ size } />
          <span>개방시간: { availableTime.open } ~ { availableTime.close }</span>
        </div>
        <div>
          <MdDirectionsTransit size={ size } />
          <span>교통: { transportation.stop } - { transportation.method } { transportation.stop }</span>
        </div>
        <div>
          <MdLocalParking size={ size } />
          <span>주차장: {parkingLot ? '있음' : '없음'}</span>
        </div>
        <ul>
          <MdLabel size={ size } />
          <span>Tag: </span>{ tagCollection }
        </ul>
      </>
    );
  };
  
  return courtsInfo && (
    <Style.BodyInfoWrapper>
      { courtsInfo.length ? renderOnData(30) : '일치하는 검색이 없습니다.' }
    </Style.BodyInfoWrapper>
  );
};

export default BodyInfo;