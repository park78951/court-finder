import styled from 'styled-components';

const RecommendWrapper = styled.div`
  display: ${({ activeBtn }) => activeBtn !== 'recommendation' && 'none' };
`;

export default { RecommendWrapper };