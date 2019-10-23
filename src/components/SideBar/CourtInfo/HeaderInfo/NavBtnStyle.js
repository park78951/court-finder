import styled from 'styled-components';

const NavBtnStyle = styled.div`
  display: flex;
  flex: 1;
  margin-top: 15px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;

    & > button {
      position: absolute;
      top: 2px;
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
      height: fit-content;
      outline: none;
    }
  }

  .nav__selected {
    border-bottom: 6px solid white;
  }
`;

export default { NavBtnStyle };