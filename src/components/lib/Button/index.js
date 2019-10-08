import React from 'react';
import Style from './indexStyle';

const CustomButton = ({ color, size, children, ...rest }) => {
 
  return (
    <Style.StyledButton 
      { ...rest }
      size={ size }
      color={ color }
    >
      { children }
    </Style.StyledButton>
  );
};

export default CustomButton;