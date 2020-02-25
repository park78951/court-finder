import React from 'react';
import PropTypes from 'prop-types';
import Style from './InputStyle';

const Input  = ({ placeholder, size, type, children, ...rest }) => {
  return (
    <Style.CustomInput 
      placeholder={ placeholder } 
      size={ size }
      type={ type }
      { ...rest }
    >
      { children }
    </Style.CustomInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
};

export default React.memo(Input);