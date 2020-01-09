import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';
import CourtInfo from './CourtInfo';
import { SidebarContainerView } from '../container';
import SearchFilter from './SearchFilter';
import Style from './SideBarStyle';
import NotFound from '../NotFound';

const SideBar = () => {
  const isSidebarHidden = useSelector(state => {
    return state.storeOnFlag.isSidebarHidden;
  });
  const { pathname } = useLocation();

  return !isSidebarHidden && (
    <Style.SideBarWrapper 
      curPath={ pathname }
    >
      <Search />
      <Switch>
        <Route path='/' exact component={ SearchFilter } />
        <Route path='/search' exact component={ SidebarContainerView } />
        <Route path='/courtinfo' component={ CourtInfo } />
        <Route component={ NotFound } />
      </Switch>
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  location: PropTypes.object
};

export default React.memo(SideBar);