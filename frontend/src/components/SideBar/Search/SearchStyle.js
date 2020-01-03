import styled from 'styled-components';
import { flexBox } from '../../../styles';

const SearchContainer = styled.div`
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('flex-end') };
  background-color: white;
  width: 100%;
  height: 4rem;
  border: solid 1px #D3D3D3;
`;

export default { SearchContainer };