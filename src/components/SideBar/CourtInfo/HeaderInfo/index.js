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
  
  return (
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

export default HeaderInfo;