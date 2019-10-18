import React, { useContext } from 'react';
import Search from './Search';
import CourtInfo from './CourtInfo';
import CourtList from './CourtList';
import { CourtContext } from '../../courtStore/CourtStore';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const SideBar = () => {
  const { isSidebarHidden } = useContext(CourtContext);
  return (
    <Style.SideBarWrapper isSidebarHidden={ isSidebarHidden }>
      <Search />
      <CourtList />
      <CourtInfo />
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  isSidebarHidden: PropTypes.bool
};

export default SideBar;