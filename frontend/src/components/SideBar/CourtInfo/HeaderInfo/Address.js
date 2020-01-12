import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import Style from './AddressStyle';
import PropTypes from 'prop-types';

const Address = ({ address }) => {
  return (
    <Style.AddressStyle>
      <div><MdLocationOn size={25} /></div>
      <p> { address }</p>
    </Style.AddressStyle>
  );
};

Address.propTypes = {
  address: PropTypes.string
};

export default Address;