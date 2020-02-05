import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import Style from './HeaderInfoStyle';
import { selectCourt } from '@actions';

const HeaderInfo = () => {
  const { selectedCourt } = useSelector(({ courtStore }) => courtStore);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(selectCourt()); 
    }
  }, []);
  
  return selectedCourt && (
    <Style.HeaderWrapper>
      <Title { ...selectedCourt } />
      <Address { ...selectedCourt } />
      <Additional />
      <NavBtn />
    </Style.HeaderWrapper>
  );
};

HeaderInfo.propTypes = {
  selectedCourt: PropTypes.array
};

export default React.memo(HeaderInfo);