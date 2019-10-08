import React, { useContext } from 'react';
import { CourtContext } from '../../courtStore/CourtStore';
import styled from 'styled-components';

const WholeAppWrapper = styled.div`
  display: ${ ({ courtAdditionFlag }) => 
    courtAdditionFlag ? 'block' : 'none' };
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(40, 40, 40, 0.7);
`;

const AppContainer = ({ children }) => {
  const { courtAdditionFlag } = useContext(CourtContext);
  return (
    <WholeAppWrapper
      courtAdditionFlag={ courtAdditionFlag }
    >
      { children }
    </WholeAppWrapper>
  );
};

export default AppContainer;