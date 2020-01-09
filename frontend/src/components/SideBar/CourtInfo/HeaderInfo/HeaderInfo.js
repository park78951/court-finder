import React from 'react';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import { useSelector } from 'react-redux';
import Style from './HeaderInfoStyle';
import PropTypes from 'prop-types';

const HeaderInfo = () => {
  const courtData = useSelector(state => {
    return state.storeOnSelection.selectedCourt;
  });
  
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