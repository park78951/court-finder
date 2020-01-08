import styled from 'styled-components';
import { flexBox } from '../../styles';

const BasicFormWrapper = styled.div`
  .fee__container--input{
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-between') };
  }

  .input__container--available-time {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-between') };
    ${ flexBox.alignItems('center') };
    & > span {
      font-weight: bold;
    }
  }

  .button__container {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('center') };
    ${ flexBox.alignItems('center') };
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export default { BasicFormWrapper };