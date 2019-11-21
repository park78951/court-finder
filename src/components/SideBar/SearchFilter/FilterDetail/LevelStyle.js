import styled from 'styled-components';

const LevelWrapper = styled.div`
  display: ${({ activeBtn }) => activeBtn !== 'level' && 'none' };
`;

export default { LevelWrapper };