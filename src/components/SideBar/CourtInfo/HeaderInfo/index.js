import React, { useContext } from 'react';
import { CourtContext } from '../../../../courtStore/CourtStore';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const HeaderInfo = () => {
  const { selectedCourt } = useContext(CourtContext);
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