import styled from 'styled-components';

const TagFormStyle = styled.div`
  .tag__container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;



    & > div button {
      background: none;
      border: none;
      color: #BEBEBE;
      padding: 0;
      cursor: pointer;
      outline: none;
      margin: 20px 5px 10px 5px;

      &:active {
        color: #383838;
      }
    }

  }

  .tag__inputs {
    display: flex;
    flex-direction: column;
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

export default { TagFormStyle };