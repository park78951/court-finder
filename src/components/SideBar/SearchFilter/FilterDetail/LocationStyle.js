import styled from 'styled-components';

const LocationWrapper = styled.div`
  display: ${({ activeBtn }) => activeBtn !== 'location' && 'none' };
`;

export default { LocationWrapper };