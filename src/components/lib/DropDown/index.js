import React from 'react';
import styled from 'styled-components';

const DropDown = styled.select`
  height: 2.5rem;
  width: ${({ size }) => size === 'large' ? '13rem' : '9rem'};
  border-radius: 5px;
  font-weight: bolder;
  font-size: 1rem;
  text-indent: 0.3rem;
`;

const CustomDropDown = ({ optionValues, size }) => {
  const selectOptions = optionValues.map( optionValue => {
    return (
      <option value={ optionValue } key={ optionValue } >{optionValue}</option>
    );
  });

  return (
    <DropDown size={size}>
      { selectOptions }
    </DropDown>
  );
};

export default CustomDropDown;