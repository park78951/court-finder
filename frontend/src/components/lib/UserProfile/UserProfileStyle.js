import styled from 'styled-components';
import { defaultTheme } from '@styles';

const UserProfile = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const UserProfileAvatar = styled.div`
  position: absolute;
  height: 80%;
  width: 2.5rem;
  top: 50%;
  background-color: ${defaultTheme.LOGO_BACKGROUND};
  color: ${defaultTheme.LOGO_LETTER};
  border-radius: 50%;
  text-align: center;
  line-height: 2.4rem;
  font-size: 1.3rem;
  transform: translateY(-50%);
`;

const UserProfileNickname = styled.div`
  padding: 1rem 0 0.8rem 4rem;
  height: 100%;
`;

export default { 
  UserProfile, 
  UserProfileAvatar, 
  UserProfileNickname,
}