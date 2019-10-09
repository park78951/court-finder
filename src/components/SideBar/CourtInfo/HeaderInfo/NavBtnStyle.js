import styled from 'styled-components';

const NavBtnStyle = styled.div`
  display: flex;
  flex: 1;
  margin-top: 15px;

    & > div {
      display: flex;
      flex-direction: column;
      width: 50%;
      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
      }
      & > div {
        width: 100%;
        flex: 1;
      }
  }
`;

export default { NavBtnStyle };