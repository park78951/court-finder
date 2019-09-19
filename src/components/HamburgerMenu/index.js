import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-content: space-evenly;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  z-index: 10;
`

const HamburgerMenu = () => {
  return (
    <HamburgerWrapper>
      <FaBars size={40} />
    </HamburgerWrapper>
  )
}

export default HamburgerMenu;