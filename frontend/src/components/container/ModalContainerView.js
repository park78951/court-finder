import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WholeAppWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(40, 40, 40, 0.7);
`;

const ModalContainerView = ({ children }) => {
  return (
    <WholeAppWrapper>
      { children }
    </WholeAppWrapper>
  );
};

ModalContainerView.propTypes = {
  children: PropTypes.object
};

export default ModalContainerView;