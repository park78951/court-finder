import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const AdditionalStyle = styled.div`
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('space-evenly') };
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

export default { AdditionalStyle };