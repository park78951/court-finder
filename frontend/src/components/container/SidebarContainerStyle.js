import styled from 'styled-components';
import { interfaceStyles } from '@styles';

const SideBarContentsWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  ${interfaceStyles.scrollbar};
  ${interfaceStyles.shadowAboveOnScroll};
`;

export default { SideBarContentsWrapper };