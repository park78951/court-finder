import React, { useContext } from 'react';
import Search from './Search';
import CourtInfo from './CourtInfo';
import { CourtContext } from '../../courtStore/CourtStore';
import Style from './indexStyle';

const SideBar = () => {
  const { isSidebarHidden } = useContext(CourtContext);
  return (
    <Style.SideBarWrapper isSidebarHidden={ isSidebarHidden }>
      <Search />
      <CourtInfo />
    </Style.SideBarWrapper>
  );
};

export default SideBar;