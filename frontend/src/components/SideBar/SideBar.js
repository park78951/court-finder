import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';
import CourtInfo from './CourtInfo';
import { SidebarContainerView } from '../container';
import SearchFilter from './SearchFilter';
import Style from './SideBarStyle';
import NotFound from '../NotFound';
import HeaderInfo from './CourtInfo/HeaderInfo';

const SideBar = ({ children }) => {
  const isSidebarHidden = useSelector(state => {
    return state.storeOnFlag.isSidebarHidden;
  });
  const { route } = useRouter();
  const headerInfo = useMemo(() => {
    return route.startsWith('/court') && <HeaderInfo />
  }, [route.startsWith('/court')]);

  return !isSidebarHidden && (
    <Style.SideBarWrapper 
      curPath={ route }
    >
      <Search />
      {headerInfo}
      {/* <Switch>
        <Route path='/' exact component={ SearchFilter } />
        <Route path='/search' exact component={ SidebarContainerView } />
        <Route path='/courtinfo' component={ CourtInfo } />
        <Route component={ NotFound } />
      </Switch> */}
    {children}
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  location: PropTypes.object
};

export default React.memo(SideBar);