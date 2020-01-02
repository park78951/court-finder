import React from 'react';
import Style from './DropDownStyle';
import PropTypes from 'prop-types';

const CustomDropDown = ({ optionValues = [], size, ...rest }) => {
  const selectOptions = optionValues.map( optionValue => {
    return (
      <option value={ optionValue } key={ optionValue } >{optionValue}</option>
    );
  });

  return (
    <Style.DropDown 
      size={ size }
      { ...rest }
    >
      <option 
        defaultValue='' 
        value=''
      >
        선택해주세요
      </option>
      { selectOptions }
    </Style.DropDown>
  );
};

CustomDropDown.defaultProps = {
  size: 'large'
};

CustomDropDown.propTypes = {
  optionValues: PropTypes.array,
  size: PropTypes.string
};

export default React.memo(CustomDropDown);