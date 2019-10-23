import React from 'react';
import { DotLoader } from 'react-spinners';
import Styled, { loaderStyle } from './indexStyle';

const Loading = () => {
  return (
    <Styled.LoaderContainer>
      <DotLoader 
        sizeUnit={'rem'}
        size={4}
        color={'#505050'}
        css={ loaderStyle }
      />
    </Styled.LoaderContainer>
  );
};

export default Loading;