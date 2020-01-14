import React from 'react';
import { ClipLoader } from 'react-spinners';
import { loaderConfig } from '../../config/initConfig';
import Styled, { loaderStyle } from './LoaderStyle';

const Loader = () => {
  const {
    sizeUnit,
    size,
    color
  } = loaderConfig;

  return (
    <Styled.LoaderContainer>
      <ClipLoader 
        sizeUnit={ sizeUnit }
        size={ size }
        color={ color }
        css={ loaderStyle }
      />
    </Styled.LoaderContainer>
  );
};

export default Loader;