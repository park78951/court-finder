import React from 'react';
import Style from './indexStyle';

const Input  = ({ placeholder, size, type, ...rest }) => {
  return (
    <Style.CustomInput 
      placeholder={ placeholder } 
      size={ size }
      type={ type }
      { ...rest }
    />
  );
};

export default React.memo(Input);