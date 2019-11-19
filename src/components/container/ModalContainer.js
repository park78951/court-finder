import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  const { courtAdditionFlag } = useSelector(state => ({
    courtAdditionFlag: state.storeOnFlag.courtAdditionFlag
  }));

  return (
    <WholeAppWrapper
      courtAdditionFlag={ courtAdditionFlag }
    >
      { children }
    </WholeAppWrapper>
  );
};

AppContainer.propTypes = {
  courtAdditionFlag: PropTypes.func,
  children: PropTypes.object
};

export default AppContainer;