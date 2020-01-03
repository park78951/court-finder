import styled from 'styled-components';
import { flexBox } from '../../styles';

const AdditionalFormStyle = styled.div`
  .input__container--transportation {
    ${ flexBox.displayFlex() };
    ${ flexBox.flexWrap('wrap') };
    ${ flexBox.justifyContent('space-between') };

    & > div {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-between') };
      margin-top: 10px;
    }
  }
  
  .input__container--available-time {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-between') };
  }

  .button__container--two-btn {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-envely') };
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }
`;

export default { AdditionalFormStyle };