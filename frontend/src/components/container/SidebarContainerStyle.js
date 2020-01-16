import styled from 'styled-components';

const SideBarContentsWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  flex: 1 1 auto;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 50%;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
`;

export default { SideBarContentsWrapper };