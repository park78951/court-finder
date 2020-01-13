import styled from 'styled-components';

const NoResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  & > p {
    & > span {
      color: blue;
      font-weight: bold;
    }
  }
`;

export default { NoResultWrapper };