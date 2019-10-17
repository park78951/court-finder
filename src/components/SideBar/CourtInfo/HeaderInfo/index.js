import React, { useContext } from 'react';
import { CourtContext } from '../../../../courtStore/CourtStore';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';

import Style from './indexStyle';

const HeaderInfo = () => {
  const { searchedInfo } = useContext(CourtContext);
  return (
    <Style.HeaderWrapper>
      <Title searchedInfo={ searchedInfo[0] } />
      <Address searchedInfo={ searchedInfo[0] } />
      <Additional />
      <NavBtn />
    </Style.HeaderWrapper>
  );
};

export default React.memo(HeaderInfo);