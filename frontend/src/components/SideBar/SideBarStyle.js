import styled from 'styled-components';
import { flexBox } from '../../styles';

const SideBarWrapper = styled.div`
  ${ flexBox.displayFlex() };
  ${ flexBox.flexFlow('column') };
  position: absolute;
  min-height: ${ ({ curPath }) => curPath === '/' && '120px' };
  height: ${ ({ curPath }) => curPath !== '/' && '100vh' };
  top: 0;
  background-color: white;
  width: 380px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
  opacity: 0.9;
  overflow: hidden;
`;

export default { SideBarWrapper };