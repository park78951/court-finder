import React from 'react';
import { ThemeProvider } from 'styled-components';

import Location from './Location';
import Style from './FilterDetailStyle';
import { buttonTheme } from '@initConfig';

const FilterDetail = () => {
  return (
    <ThemeProvider theme={ buttonTheme }>
      <Style.DetailWrapper>
        <Location />
      </Style.DetailWrapper>
    </ThemeProvider>
  );
};

export default FilterDetail;