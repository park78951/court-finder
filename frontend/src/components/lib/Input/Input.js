import React from 'react';
import Style from './InputStyle';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
};

export default React.memo(Input);