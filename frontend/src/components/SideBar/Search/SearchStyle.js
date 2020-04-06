import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  background-color: white;
  width: 100%;
  height: 4rem;
  border: solid 1px #D3D3D3;
`;

const homeButton = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  cursor: pointer;
`;

export default { SearchContainer, homeButton };