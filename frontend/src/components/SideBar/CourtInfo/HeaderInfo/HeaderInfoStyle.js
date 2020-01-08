import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const HeaderWrapper = styled.div`
  ${ flexBox.displayFlex() };
  ${ flexBox.flexDirection('column') };
  height: 12rem;
  width: 100%;
  background-color: #F7B733;
`;

export default { HeaderWrapper };