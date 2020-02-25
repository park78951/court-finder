import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MapContainerWrapper = styled.div`
  height: 100vh;
  width: 100%;

  .infoBox {
    border-radius: 0.3rem;
    animation: ${ appear } 1s;

    .infoBox__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      background: white;
      border: 1px solid #ccc;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: ${({ infoBoxWidth }) => `${ infoBoxWidth }px` };
      height: 3rem;
      border-radius: 25px;

      & > p, h2 {
        margin: 0;
        padding: 0;
      }
      
      & > h2 {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }
`;

export default { MapContainerWrapper };
