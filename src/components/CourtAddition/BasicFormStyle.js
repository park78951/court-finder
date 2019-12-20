import styled from 'styled-components';

const BasicFormWrapper = styled.div`
  .fee__container--input{
    display: flex;
    justify-content: space-between;
  }

  .input__container--available-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
      font-weight: bold;
    }
  }

  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export default { BasicFormWrapper };