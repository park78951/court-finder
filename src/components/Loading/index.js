import React from 'react';
import { DotLoader } from 'react-spinners';
import { loaderConfig } from '../../config/initConfig';
import Styled, { loaderStyle } from './indexStyle';

const Loading = () => {
  const {
    sizeUnit,
    size,
    color
  } = loaderConfig;

  return (
    <Styled.LoaderContainer>
      <DotLoader 
        sizeUnit={ sizeUnit }
        size={ size }
        color={ color }
        css={ loaderStyle }
      />
    </Styled.LoaderContainer>
  );
};

export default Loading;