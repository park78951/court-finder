import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCourt } from '../../../actions';
import Style from './CourtItemStyle';
import PropTypes from 'prop-types';

const CourtItem = ({ searchedCourt }) => {
  const { locationName, address, in_out, phone } = searchedCourt;
  const dispatch = useDispatch();

  const selectCourtInfo = () => {
    dispatch(selectCourt(searchedCourt));
    localStorage.setItem('selectCourt', JSON.stringify(searchedCourt));
  };

  return (
    <Style.CourtItemWrapper
      onClick={ selectCourtInfo }
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
  searchedCourt: PropTypes.object
};

export default CourtItem;