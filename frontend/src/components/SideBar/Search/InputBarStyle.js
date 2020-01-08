import styled from 'styled-components';
import { flexBox } from '../../../styles';


const InputContainer = styled.div`
  width: 80%;
  height: 100%;

  & > form {
    ${ flexBox.displayFlex() };
    ${ flexBox.alignContent('center') };
    height: 100%;
    width: 100%;
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
    ${ flexBox.flex(1) };
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('center') };
    ${ flexBox.alignItems('center') };
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

export default { InputContainer };