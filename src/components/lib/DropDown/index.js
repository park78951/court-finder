import React from 'react';
import Style from './indexStyle';

const CustomDropDown = ({ optionValues, size, ...rest }) => {
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
      { selectOptions }
    </Style.DropDown>
  );
};

export default React.memo(CustomDropDown);