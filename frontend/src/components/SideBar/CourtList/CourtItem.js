import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  selectCourt, 
  getMouseOverList, 
} from '@actions';
import Style from './CourtItemStyle';

const CourtItem = ({ searchedInfo }) => {
  const { name, address, isIndoor, phone } = searchedInfo;
  const dispatch = useDispatch();

  const selectCourtInfo = useCallback(() => {
    dispatch(selectCourt(searchedInfo));
    dispatch(getMouseOverList());
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
      <h3>{ name }</h3><span>{ isIndoor ? '실내' : '실외' }</span>
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