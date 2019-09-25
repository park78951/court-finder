import React from 'react';
import styled from 'styled-components';
import HeaderInfo from './HeaderInfo';
import BodyInfo from './BodyInfo';

const CourtInfoWrapper = styled.div`
  display: flex;
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

export default CourtInfo;
