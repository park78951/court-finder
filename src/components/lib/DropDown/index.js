import React from 'react';
import styled from 'styled-components';

const DropDown = styled.select`
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 1rem;
`;

const CustomDropDown = ({ optionValues }) => {
  const selectOptions = optionValues.map( optionValue => {
    return (
      <option value={ optionValue } key={ optionValue } >{optionValue}</option>
    );
  });

  return (
    <DropDown>
      { selectOptions }
    </DropDown>
  );
};

export default CustomDropDown;