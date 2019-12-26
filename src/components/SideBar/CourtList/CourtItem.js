import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  selectCourt, 
  getListOverCourt, 
  removeListOverCourt 
} from '../../../actions';
import Style from './CourtItemStyle';

const CourtItem = ({ searchedCourt }) => {
  const { locationName, address, in_out, phone } = searchedCourt;
  const dispatch = useDispatch();

  const selectCourtInfo = useCallback(() => {
    dispatch(selectCourt(searchedCourt));
    localStorage.setItem('selectCourt', JSON.stringify(searchedCourt));
  }, [searchedCourt]);

  const onMouseOverOrOut = useCallback(courtInfo => () => {
    courtInfo 
      ? dispatch(getListOverCourt(courtInfo))
      : dispatch(removeListOverCourt());
  }, [searchedCourt]);

  return (
    <Style.CourtItemWrapper
      onClick={ selectCourtInfo }
      onMouseOver={ onMouseOverOrOut(searchedCourt) }
      onMouseOut={ onMouseOverOrOut() }
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