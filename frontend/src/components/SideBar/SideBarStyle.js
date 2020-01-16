import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  min-height: ${ ({ curPath }) => curPath === '/' && '120px' };
  height: ${ ({ curPath }) => curPath !== '/' && '100vh' };
  top: 0;
  background-color: white;
  width: 380px;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
  overflow: hidden;
`;

export default { SideBarWrapper };