import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  selectCourt, 
  getMouseOverList, 
} from '../../../actions';
import Style from './CourtItemStyle';

const CourtItem = ({ searchedInfo }) => {
  const { locationName, address, in_out, phone } = searchedInfo;
  const dispatch = useDispatch();

  const selectCourtInfo = useCallback(() => {
    dispatch(selectCourt(searchedInfo));
    dispatch(getMouseOverList());
    localStorage.setItem('selectCourt', JSON.stringify(searchedInfo));
  }, [searchedInfo]);

  const onMouseOverOut = useCallback(courtInfo => () => {
    dispatch(getMouseOverList(courtInfo));
  }, [searchedInfo]);

  return (
    <Style.CourtItemWrapper
      onClick={ selectCourtInfo }
      onMouseEnter={ onMouseOverOut(searchedInfo) }
      onMouseLeave={ onMouseOverOut(null) }
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