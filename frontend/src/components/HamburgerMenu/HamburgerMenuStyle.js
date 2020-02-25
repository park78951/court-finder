import styled from 'styled-components';

const HamburgerWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ curPath }) => curPath === '/' ? '14px' : '4px' };
  left: ${({ curPath }) => curPath === '/' ? '14px' : '4px' };
  width: 60px;
  height: 55px;
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