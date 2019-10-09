import styled from 'styled-components';

const HeaderTitleStyle = styled.div`
  display: flex;
  padding: 10px 0;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 20px 0 5px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  & > h2 {
    display: inline-block;
    flex: 1;
    align-content: center;
    margin: 0;
  }
`;

export default { HeaderTitleStyle };