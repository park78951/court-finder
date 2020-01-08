import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const AddressStyle = styled.div`
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('center') };
  ${ flexBox.alignItems('center') };
  font-weight: bold;
  margin: 5px 0;
    & > div {
      ${ flexBox.displayFlex() };
      font-weight: bold;
      width: fit-content;
    }
    & > p {
      display: inline-block;
      margin: 0 5px;;
      font-size: 1.15rem;
    }
`;

export default { AddressStyle };