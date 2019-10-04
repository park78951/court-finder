import React, { useContext } from 'react';
import Search from './Search';
import CourtInfo from './CourtInfo';
import { CourtContext } from '../../courtStore/CourtStore';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: ${ ({ isSidebarHidden }) => isSidebarHidden ? 'none' : 'flex'};
  flex-flow: column;
  position: absolute;
  top: 0;
  background-color: white;
  width: 380px;
  height: 100vh;
`;

const SideBar = () => {
  const { isSidebarHidden } = useContext(CourtContext);
  return (
    <SideBarWrapper isSidebarHidden={ isSidebarHidden }>
      <Search />
      <CourtInfo />
    </SideBarWrapper>
  );
};

export default SideBar;