import styled from 'styled-components';

const HelperNavWrapper = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > button {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0 10px 0 10px;
    border-radius: 50%;

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