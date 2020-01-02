import styled from 'styled-components';
import { sizeStyles, colorStyles } from './ButtonDynamicStyle';

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  ${colorStyles}

  ${sizeStyles}
`;

export default { StyledButton };