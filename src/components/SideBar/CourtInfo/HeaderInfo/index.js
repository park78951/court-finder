import React, { useContext } from 'react';
import { CourtContext } from '../../../../courtStore/CourtStore';
import Title from './Title';
import Address from './Adress';
import Additional from './Additional';
import NavBtn from './NavBtn';

import Style from './indexStyle';

const HeaderInfo = () => {
  const { courtsInfo } = useContext(CourtContext);
  return (
    <Style.HeaderWrapper>
      <Title courtsInfo={ courtsInfo } />
      <Address courtsInfo={ courtsInfo } />
      <Additional />
      <NavBtn />
    </Style.HeaderWrapper>
  );
};

export default React.memo(HeaderInfo);