import React, { useContext } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { SELECT_COURT } from '../../../config/constants';
import Style from './CourtItemStyle';
import PropTypes from 'prop-types';

const CourtItem = ({ searchedCourt }) => {
  const { locationName, address, in_out, phone } = searchedCourt;
  const { courtsDispatch } = useContext(CourtContext);

  const selectCourt = () => {
    courtsDispatch({ type: SELECT_COURT, payload: searchedCourt });
    localStorage.setItem('selectCourt', JSON.stringify(searchedCourt));
  };

  return (
    <Style.CourtItemWrapper
      onClick={ selectCourt }
    >
      <h3>{ locationName }</h3><span>{ in_out }</span>
      <div>
        <p>주소: { address }</p>
        <p>전화번호: { phone }</p>
      </div>
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