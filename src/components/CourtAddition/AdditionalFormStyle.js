import styled from 'styled-components';

const AdditionalFormStyle = styled.div`
  .input__container--transportation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
  
  .input__container--available-time {
    display: flex;
    justify-content: space-between;
  }

  .button__container--two-btn {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }
`;

export default { AdditionalFormStyle };