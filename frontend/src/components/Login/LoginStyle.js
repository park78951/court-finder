import styled from 'styled-components';
import { defaultTheme } from '@styles';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 0.7rem;
  font-weight: bold;
  background-color: ${defaultTheme.WHITE};
  border-radius: 50%;
  cursor: pointer;
`;

export default { LoginWrapper };