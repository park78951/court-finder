import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import CourtInfo from './CourtInfo';

const SideBarWrapper = styled.div`
display: flex;
flex-flow: column;
position: absolute;
top: 0;
background-color: white;
width: 420px;
height: 100vh;
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Search />
      <CourtInfo />
    </SideBarWrapper>
  );
};

export default SideBar;