import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
  width: 100%;
  height: ${ ({ curPath }) => curPath === '/' ? '60px' : '8%' };
  border: solid 1px #D3D3D3;
`;

export default { SearchContainer };