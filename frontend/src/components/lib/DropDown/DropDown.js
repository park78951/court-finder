import React from 'react';
import PropTypes from 'prop-types';
import Style from './DropDownStyle';

const CustomDropDown = ({ optionValues = [], size, placeholder = true, ...rest }) => {
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
      {
        placeholder && (
          <option defaultValue='' value=''>
            선택해주세요
          </option>
        ) 
      }
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