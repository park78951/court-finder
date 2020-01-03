import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const NavBtnStyle = styled.div`
  ${ flexBox.displayFlex() };
  height: 35%;
  margin-top: 15px;

  & > a {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('center') };
    ${ flexBox.alignItems('center') };
    position: relative;
    width: 50%;

    & > button {
      position: absolute;
      top: 10;
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
      height: fit-content;
      outline: none;
      height: 90%;
      width: 90%;
    }
  }

  .nav__selected {
    background-color: white;
    border-radius: 15px 15px 0 0;
  }
`;

export default { NavBtnStyle };