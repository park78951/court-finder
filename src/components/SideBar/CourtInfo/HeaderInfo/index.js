import React, { useContext } from 'react';
import { CourtContext } from '../../../../courtStore/CourtStore';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const HeaderInfo = () => {
  const { searchedInfo } = useContext(CourtContext);
  
  return (
    <Style.HeaderWrapper>
      <Title {...searchedInfo[0]} />
      <Address {...searchedInfo[0]} />
      <Additional />
      <NavBtn />
    </Style.HeaderWrapper>
  );
};

HeaderInfo.propTypes = {
  searchedInfo: PropTypes.array
};

export default HeaderInfo;