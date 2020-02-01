import styled from 'styled-components';

const NavBtnStyle = styled.div`
  display: flex;
  height: 35%;
  margin-top: 15px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    color: #000;

    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:focus { text-decoration: none; }
    &:hover, &:active { text-decoration: none; }

    &.selected {
      background-color: white;
      border-radius: 15px 15px 0 0;
    }

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
`;

export default { NavBtnStyle };