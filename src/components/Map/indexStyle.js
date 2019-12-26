import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;

  .infoBox {
    border-radius: 0.3rem;
    animation-name: appear;
    animation-duration: 1s;

    .infoBox__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: white;
      border: 1px solid #ccc;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: 180px;
      height: 3rem;

      & > p, h2 {
        margin: 0;
        padding: 0;
      }
    }
  }

  @keyframes appear {
    /* keyframe */
    from {
      opacity: 0;
    }
    /* keyframe */
    to {
      opacity: 1;
    }
  }
`;

export default { MapContainer };
