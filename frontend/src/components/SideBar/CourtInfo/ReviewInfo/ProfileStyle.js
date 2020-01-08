import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const ProfileWrapper = styled.div`
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('space-between') };
  margin-right: 15px;

  & h3 {
    margin: 0;
  }
`;

export default { ProfileWrapper };