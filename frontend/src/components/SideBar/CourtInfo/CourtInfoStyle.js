import styled from 'styled-components';
import { flexBox } from '../../../styles';

const CourtInfoWrapper = styled.div`
  height: 92%;
  ${ flexBox.displayFlex() };
  ${ flexBox.flexDirection('column') };
`;

export default { CourtInfoWrapper };