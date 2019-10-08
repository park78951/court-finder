import React from 'react';
import Style from './indexStyle';

const CustomDropDown = ({ optionValues, size }) => {
  const selectOptions = optionValues.map( optionValue => {
    return (
      <option value={ optionValue } key={ optionValue } >{optionValue}</option>
    );
  });

  return (
    <Style.DropDown size={size}>
      { selectOptions }
    </Style.DropDown>
  );
};

export default CustomDropDown;