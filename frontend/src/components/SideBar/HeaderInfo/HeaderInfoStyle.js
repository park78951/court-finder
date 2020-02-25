import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 12rem;
  width: 100%;
  background-color: #f4b41a;
  color: #1d1b1b;

  & > button {
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 20px 0 5px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export default { HeaderWrapper };