import styled from 'styled-components';
import { flexBox } from '../../../styles';

const RefetchWrapper = styled.div`
  height: 100%;
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('center') };
  ${ flexBox.alignItems('center') };
  ${ flexBox.flexDirection('column') };

  & > p {
    text-align: center;
  }
`;

export default { RefetchWrapper };