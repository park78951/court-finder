import React from 'react';
import { DropDown } from '@components/lib';

const FilterMenu = ({ menuTitle, ...rest }) => {
  return (
    <div>
      <span>{ menuTitle } : </span> 
      <DropDown 
        name={ menuTitle }
        { ...rest }
      />
    </div>
  );
};

export default FilterMenu;