import React from 'react';
import Style from './indexStyle';

const Input  = ({ placeholder, size, type, onChange }) => {
  return (
    <Style.CustomInput 
      placeholder={ placeholder } 
      size={ size }
      type={ type }
      onChange={ onChange }
    />
  );
};

export default React.memo(Input);