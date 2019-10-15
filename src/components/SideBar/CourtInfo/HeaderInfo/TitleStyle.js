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
  & > p {
    flex: 1;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default { HeaderTitleStyle };