import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Search from './Search';
import Style from './SideBarStyle';
import HeaderInfo from './HeaderInfo';

const SideBar = ({ children }) => {
  const { route } = useRouter();

  return (
    <Style.SideBarWrapper 
      curPath={route}
    >
      <Search />
      {route.startsWith('/court') && <HeaderInfo />}
      {children}
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  location: PropTypes.object
};

export default React.memo(SideBar);