import React from 'react';
import PropTypes from 'prop-types';
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import Search from './Search';
import Style from './SideBarStyle';
import HeaderInfo from './HeaderInfo';

const SideBar = ({ 
  children, 
  isSidebarHidden, 
  currentRoute,
  sidebarToggler
}) => {
  return (
    <Style.SideBarWrapper 
      curPath={currentRoute}
      isSidebarHidden={isSidebarHidden}
    >
      <Search />
      {currentRoute.startsWith('/court') && <HeaderInfo />}
      {children}
      {currentRoute !== '/' && ( 
        <Style.SidebarToggler>
          <button onClick={sidebarToggler}>
            {isSidebarHidden
              ? <GoTriangleRight size={15}/>
              : <GoTriangleLeft size={15}/>}
          </button>
        </Style.SidebarToggler>
      )}
    </Style.SideBarWrapper>
  );
};

SideBar.propTypes = {
  children: PropTypes.element.isRequired,
  isSidebarHidden: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired,
  sidebarToggler: PropTypes.func.isRequired,
};

export default React.memo(SideBar);