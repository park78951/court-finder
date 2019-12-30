import styled from 'styled-components';

const InputContainer = styled.div`
  width: 80%;
  height: 100%;

  & > form {
    display: flex;
    height: 100%;
    width: 100%;
    align-content: center;
    overflow: hidden;

    & > input {
      border: none;
      height: 100%;
      width: 80%;
      padding: 0 0 0 10px;
      font-size: 1.1rem;
      outline: none;
    }

    button {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

export default { InputContainer };