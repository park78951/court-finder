import React from 'react';
import Style from './CourtItemStyle';
import PropTypes from 'prop-types';

const CourtItem = ({ locationName, address, in_out, phone }) => {
  return (
    <Style.CourtItemWrapper>
      <h2>{ locationName }</h2>   <span>{in_out}</span>
      <p>주소: { address }</p>
      <p>전화번호: 02-{ phone }</p>
    </Style.CourtItemWrapper>
  );
};

CourtItem.propTypes = {
  locationName: PropTypes.string,
  address: PropTypes.string,
  in_out: PropTypes.string,
  phone: PropTypes.string
};

export default CourtItem;