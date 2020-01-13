import styled, { css } from 'styled-components';

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const loaderStyle = css`
  margin: 0;

  div {
    margin: 0;
  }
`;

export default { LoaderContainer };