import React from 'react';
import { useSelector } from 'react-redux';
import Search from './Search';
import CourtInfo from './CourtInfo';
import CourtList from './CourtList';
import SearchFilter from './SearchFilter';
import { Route, Switch, withRouter } from 'react-router-dom';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const SideBar = ({ location }) => {
  const isSidebarHidden = useSelector(state => {
    return state.storeOnFlag.isSidebarHidden;
  });
  const { pathname } = location;

  return !isSidebarHidden && (
    <Style.SideBarWrapper 
      curPath={ pathname }
    >
      <Search curPath={ pathname }/>
      <Switch>
        <Route path='/' exact component={ SearchFilter } />
        <Route path='/search' exact component={ CourtList} />
        <Route path='/courtinfo' component={ CourtInfo } />
      </Switch>
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  location: PropTypes.object
};

export default withRouter(SideBar);