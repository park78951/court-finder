import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: ${ ({ curPath }) => curPath === '/' ? '10px' : '0px' };
  left: ${ ({ curPath }) => curPath === '/' ? '10px' : '0px' };
  min-height: ${ ({ curPath }) => curPath === '/' && '120px' };
  height: ${ ({ curPath }) => curPath !== '/' && '100vh' };
  background-color: white;
  width: 380px;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
  overflow-y: hidden;
  margin-right: 1rem;
`;

const SidebarToggler = styled.div`
  position: absolute;
  top: 50%;
  left: 379px;
  width: 1rem;
  height: 3rem;
  background-color: white;
  z-index: 99;
`;


export default { SideBarWrapper, SidebarToggler };