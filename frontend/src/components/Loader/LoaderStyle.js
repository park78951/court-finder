import styled, { css } from 'styled-components';
import { flexBox } from '../../styles';

const LoaderContainer = styled.div`
  ${ flexBox.flex(1) };
  ${ flexBox.displayFlex() };
  ${ flexBox.justifyContent('center') };
  ${ flexBox.alignItems('center') };
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