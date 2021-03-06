import styled from 'styled-components';

const HelperNavWrapper = styled.div`
  flex: 0 0 auto;
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: solid 1px #D3D3D3;

  & > button {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0 10px 0 10px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }

    &:active {
      color: #787878;
    }
  }
`;

export default { HelperNavWrapper };