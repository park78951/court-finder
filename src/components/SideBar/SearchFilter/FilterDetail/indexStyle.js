import styled from 'styled-components';

const DetailWrapper = styled.div`
  width: 100%;
  min-height: 20rem;
  display: ${({ filterFlag }) => !filterFlag && 'none'}
`;

export default { DetailWrapper };