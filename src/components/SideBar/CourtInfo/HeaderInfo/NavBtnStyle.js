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

    & > button {
      position: absolute;
      top: 10px;
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
      height: fit-content;
      outline: none;
    }
  }

  .nav__selected {
    background-color: white;
    border-radius: 15px 15px 0 0;
  }
`;

export default { NavBtnStyle };