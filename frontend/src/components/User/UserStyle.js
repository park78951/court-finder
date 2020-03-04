import styled from 'styled-components';
import { defaultTheme } from '@styles';

const UserWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${defaultTheme.BACKGROUND_USER};
  border-radius: 2rem;

  & > .user__name {
    text-align: center;
    line-height: 2.5rem;
    font-weight: bold;
    color: ${defaultTheme.WHITE};
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export default { UserWrapper };