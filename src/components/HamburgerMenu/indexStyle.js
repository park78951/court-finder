import styled from 'styled-components';

const HamburgerWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 60px;
  height: 60px;
  z-index: 10;
  background-color: ${ ({ isSidebarHidden }) => isSidebarHidden ? 'white' : 'transparent' };
  border: none;
  border-radius: 5px;
  cursor: pointer;
   :focus {
     outline: none;
   }
`;

export default { HamburgerWrapper };