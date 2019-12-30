import React from 'react';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import { useSelector } from 'react-redux';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const HeaderInfo = () => {
  const selectedCourt = useSelector(state => {
    return state.storeOnSelection.selectedCourt;
  });
  const courtData = selectedCourt || JSON.parse(localStorage.getItem('selectCourt'));
  
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

export default HeaderInfo;