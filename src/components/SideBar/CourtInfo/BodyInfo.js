import React, { useContext } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { NO_DATA } from '../../../config/constants';
import { 
  MdLanguage,
  MdPhone,
  MdAttachMoney,
  MdHome,
  MdAccessTime,
  MdDirectionsTransit,
  MdLocalParking,
} from 'react-icons/md';
import Style from './BodyInfoStyle';

const BodyInfo = () => {
  const { searchedInfo } = useContext(CourtContext);

  const renderOnData = size => {
    const {
      web,
      phone,
      fee,
      in_out,
      availableTime,
      transportation,
      parkingLot,
    } = searchedInfo[0];
    return (
      <>
        <div>
          <div className=''>
            <MdLanguage size={ size } />
          </div>
          { web
            ? <a href={ web } target="_blank"> { web } </a>
            : <span>{ NO_DATA }</span>
          }
        </div>
        <div>
          <MdPhone size={ size } />
          <span>전화번호: 02-{ phone ? phone : NO_DATA }</span>
        </div>
        <div>
          <MdAttachMoney size={ size } />
          <span>요금: { 
            fee
              ? `${ fee.amount } / ${ fee.time }` 
              : NO_DATA 
          }</span>
        </div>
        <div>
          <MdHome size={ size } />
          <span>실내여부: { in_out ? in_out : NO_DATA }</span>
        </div>
        <div>
          <MdAccessTime size={ size } />
          <span>개방시간: { 
            availableTime 
              ? `${availableTime.open} ~ ${availableTime.close}` 
              : NO_DATA 
          }</span>
        </div>
        <div>
          <MdDirectionsTransit size={ size } />
          <span>교통: {
            transportation
              ? `${ transportation.method } - ${ transportation.detail }` 
              : NO_DATA
          }</span>
        </div>
        <div>
          <MdLocalParking size={ size } />
          <span>주차장: {parkingLot ? parkingLot : NO_DATA }</span>
        </div>
        {/* <ul>
          <MdLabel size={ size } />
          <span>Tag: </span>{ tagCollection ? tagCollection : NO_DATA }
        </ul> */}
      </>
    );
  };
  
  return searchedInfo && (
    <Style.BodyInfoWrapper>
      { searchedInfo.length ? renderOnData(30) : '일치하는 검색이 없습니다.' }
    </Style.BodyInfoWrapper>
  );
};

export default BodyInfo;