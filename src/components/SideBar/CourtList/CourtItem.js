import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  selectCourt, 
  getListOverCourt, 
  removeListOverCourt 
} from '../../../actions';
import Style from './CourtItemStyle';

const CourtItem = ({ searchedInfo }) => {
  const { locationName, address, in_out, phone } = searchedInfo;
  const dispatch = useDispatch();

  const selectCourtInfo = useCallback(() => {
    dispatch(selectCourt(searchedInfo));
    localStorage.setItem('selectCourt', JSON.stringify(searchedInfo));
  }, [searchedInfo]);

  const onMouseOverOrOut = useCallback(courtInfo => () => {
    courtInfo 
      ? dispatch(getListOverCourt(courtInfo))
      : dispatch(removeListOverCourt());
  }, [searchedInfo]);

  return (
    <Style.CourtItemWrapper
      onClick={ selectCourtInfo }
      onMouseEnter={ onMouseOverOrOut(searchedInfo) }
      onMouseLeave={ onMouseOverOrOut() }
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
  searchedInfo: PropTypes.object
};

export default CourtItem;