import styled from 'styled-components';
import { sizeStyles, colorStyles } from './DynamicStyle';

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

StyledButton.defaultProps = {
  color: 'acceptance',
  size: 'medium'
};

export default { StyledButton };