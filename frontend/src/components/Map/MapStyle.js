import styled, { keyframes } from 'styled-components';
import { flexBox } from '../../styles';

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;

  .infoBox {
    border-radius: 0.3rem;
    animation: ${ appear } 1s;

    .infoBox__container {
      ${ flexBox.displayFlex() };
      ${ flexBox.justifyContent('center') };
      ${ flexBox.flexDirection('column') };
      background: white;
      border: 1px solid #ccc;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: ${({ infoBoxWidth }) => `${ infoBoxWidth }px` };
      height: 3rem;

      & > p, h2 {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export default { MapContainer };
