import React from 'react';
import { CustomDropDown } from '../../../lib';

const FilterMenu = ({ menuTitle, ...rest }) => {
  return (
    <div>
      <span>{ menuTitle } : </span> 
      <CustomDropDown 
        name={ menuTitle }
        { ...rest }
      />
    </div>
  );
};

export default FilterMenu;