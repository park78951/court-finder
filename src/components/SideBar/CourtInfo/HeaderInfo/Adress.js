import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import Style from './AddressStyle';

const Address = ({ courtsInfo }) => {
  return (
    <Style.AddressStyle>
      <div><MdLocationOn size={25} /></div>
      <p> {courtsInfo ? courtsInfo.address : '서울시 여의도구 여의도동'}</p>
    </Style.AddressStyle>
  );
};

export default Address;