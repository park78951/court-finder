import React from 'react';
import Style from './indexStyle';
import PropTypes from 'prop-types';

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

CustomButton.defaultProps = {
  color: 'acceptance',
  size: 'medium'
};

CustomButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  childeren: PropTypes.string
};

export default React.memo(CustomButton);