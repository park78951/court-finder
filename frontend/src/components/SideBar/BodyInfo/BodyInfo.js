import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
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
import { NO_DATA } from '@constants';
import { iconSize } from '@config';
import PropTypes from 'prop-types';

const BodyInfo = () => {
  const { selectedCourt } = useSelector(({ court }) => court);

  const renderOnData = useMemo(() => {
    if(!selectedCourt) return;
    const {
      web,
      phone,
      fee,
      isIndoor,
      availableTime,
      transportation,
      parkingLot,
    } = selectedCourt;

    return selectedCourt && (
      <>
        <div>
          <div>
            <MdLanguage size={ iconSize.bodyInfo } />
          </div>
          { web
            ? <a href={ web } target="_blank"> { web } </a>
            : <span>{ NO_DATA }</span>
          }
        </div>
        <div>
          <MdPhone size={ iconSize.bodyInfo } />
          <span>전화번호: { phone ? phone : NO_DATA }</span>
        </div>
        <div>
          <MdAttachMoney size={ iconSize.bodyInfo } />
          <span>요금: { 
            fee
              ? `${ fee.amount } / ${ fee.time }` 
              : NO_DATA 
          }</span>
        </div>
        <div>
          <MdHome size={ iconSize.bodyInfo } />
          <span>실내여부: { isIndoor ? '실내' : '실외' }</span>
        </div>
        <div>
          <MdAccessTime size={ iconSize.bodyInfo } />
          <span>개방시간: { 
            availableTime 
              ? `${availableTime.open} ~ ${availableTime.close}` 
              : NO_DATA 
          }</span>
        </div>
        <div>
          <MdDirectionsTransit size={ iconSize.bodyInfo } />
          <span>교통: {
            transportation
              ? `${ transportation.method } - ${ transportation.detail }` 
              : NO_DATA
          }</span>
        </div>
        <div>
          <MdLocalParking size={ iconSize.bodyInfo } />
          <span>주차장: { parkingLot ? parkingLot : NO_DATA }</span>
        </div>
      </>
    );
  }, [selectedCourt]);

  return selectedCourt && (
    <Style.BodyInfoWrapper>
      { renderOnData }
    </Style.BodyInfoWrapper>
  );
};

BodyInfo.propTypes = {
  selectedCourt: PropTypes.array
};

export default React.memo(BodyInfo);