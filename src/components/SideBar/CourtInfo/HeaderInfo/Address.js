import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import Style from './AddressStyle';
import PropTypes from 'prop-types';

const Address = ({ address }) => {
  return (
    <Style.AddressStyle>
      <div><MdLocationOn size={25} /></div>
      <p> {address ? address : '서울시 여의도구 여의도동'}</p>
    </Style.AddressStyle>
  );
};

Address.propTypes = {
  address: PropTypes.string
};

export default Address;