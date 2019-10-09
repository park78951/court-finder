import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import Style from './AddressStyle';

const Address = courtsInfo => {
  const selectedCourt = courtsInfo[0];
  return (
    <Style.AddressStyle>
      <div><MdLocationOn size={25} /></div>
      <p> {selectedCourt ? selectedCourt.address.full : '서울시 여의도구 여의도동'}</p>
    </Style.AddressStyle>
  );
};

export default Address;