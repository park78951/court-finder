import React from 'react';
import styled from 'styled-components';
import { sizeStyles, colorStyles } from './DynamicStyle';

const StyledButton = styled.button`
  display: inline-flex;
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

const CustomButton = ({ color, size, children, ...rest }) => {
 
  return (
    <StyledButton 
      { ...rest }
      size={ size }
      color={ color }
    >
      { children }
    </StyledButton>
  );
};

StyledButton.defaultProps = {
  color: 'acceptance',
  size: 'medium'
};

export default CustomButton;