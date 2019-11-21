import styled from 'styled-components';

const KeywordsWrapper = styled.div`
  display: ${({ activeBtn }) => activeBtn !== 'keywords' && 'none' };
`;

export default { KeywordsWrapper };