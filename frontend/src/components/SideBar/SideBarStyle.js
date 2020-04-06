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
  margin-right: 1rem;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
	-webkit-transform: ${({ isSidebarHidden }) => isSidebarHidden 
    ? 'translate3d(-100%, 0, 0)'
    : 'translate3d(0, 0, 0)'};
	transform: ${({ isSidebarHidden }) => isSidebarHidden 
    ? 'translate3d(-100%, 0, 0)'
    : 'translate3d(0, 0, 0)'};
`;

const SidebarToggler = styled.div`
  position: absolute;
  top: 3%;
  left: 100%;
  z-index: 10;
  border: inherit;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.6rem;
    height: 3rem;
    border: none;
    outline: none;
    background-color: white;
    padding: 0;
    cursor: pointer;
  }
`;


export default { SideBarWrapper, SidebarToggler };