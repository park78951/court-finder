import styled from 'styled-components';
import { flexBox } from '../../styles';

const HamburgerWrapper = styled.button`
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('space-between') };
  ${ flexBox.alignItems('center') };
  position: absolute;
  top: 2px;
  left: 2px;
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