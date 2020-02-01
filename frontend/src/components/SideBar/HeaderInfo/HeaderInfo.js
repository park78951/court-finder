import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import Style from './HeaderInfoStyle';
import { selectCourt } from '@actions';

const HeaderInfo = () => {
  const courtData = useSelector(state => {
    return state.storeOnSelection.selectedCourt;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(selectCourt()); 
    }
  }, []);
  
  return (
    <Style.HeaderWrapper>
      <Title { ...courtData } />
      <Address { ...courtData } />
      <Additional />
      <NavBtn />
    </Style.HeaderWrapper>
  );
};

HeaderInfo.propTypes = {
  selectedCourt: PropTypes.array
};

export default React.memo(HeaderInfo);