import React, { useContext } from 'react';
import Search from './Search';
import CourtInfo from './CourtInfo';
import CourtList from './CourtList';
import SearchFilter from './SearchFilter';
import { CourtContext } from '../../courtStore/CourtStore';
import { Route, Switch, withRouter } from 'react-router-dom';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const SideBar = ({ location }) => {
  const { isSidebarHidden } = useContext(CourtContext);
  const { pathname } = location;

  return (
    <Style.SideBarWrapper 
      isSidebarHidden={ isSidebarHidden }
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
  isSidebarHidden: PropTypes.bool
};

export default withRouter(SideBar);