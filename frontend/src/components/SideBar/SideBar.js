import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Search from './Search';
import Style from './SideBarStyle';
import HeaderInfo from './HeaderInfo';

const SideBar = ({ children }) => {
  const isSidebarHidden = useSelector(state => {
    return state.flagStore.isSidebarHidden;
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
      {children}
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  location: PropTypes.object
};

export default React.memo(SideBar);