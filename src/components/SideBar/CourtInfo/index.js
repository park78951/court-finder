import React from 'react';
import styled from 'styled-components';
import HeaderInfo from './HeaderInfo';
import BodyInfo from './BodyInfo';

const CourtInfoWrapper = styled.div`
  display: ${({ isSelected }) => isSelected ? 'flex' : 'none'};
  flex-flow: column;
  flex: 1;
`;

const CourtInfo = () => {
  return (
    <CourtInfoWrapper>
      <HeaderInfo />
      <BodyInfo />
    </CourtInfoWrapper>
  );
};

CourtInfo.defaultProps = {
  isSelected: false
};

export default CourtInfo;
