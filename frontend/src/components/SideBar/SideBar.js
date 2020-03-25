import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
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
      {route !== '/' && ( 
        <Style.SidebarToggler>
          <GoTriangleRight 
            size={20}
          />
        </Style.SidebarToggler>
      )}
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  location: PropTypes.object
};

export default React.memo(SideBar);