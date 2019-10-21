import styled from 'styled-components';

const NavBtnStyle = styled.div`
  display: flex;
  flex: 1;
  margin-top: 15px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    & > button {
      display: flex;
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
      height: fit-content;
      outline: none;
    }
  }

  .nav__selected {
    border-bottom: 4px solid white;
  }
`;

export default { NavBtnStyle };