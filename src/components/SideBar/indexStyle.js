import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: ${ ({ isSidebarHidden }) => isSidebarHidden ? 'none' : 'flex'};
  flex-flow: column;
  position: absolute;
  height: ${ ({ curPath }) => curPath === '/' ? '120px' : '100vh'};
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