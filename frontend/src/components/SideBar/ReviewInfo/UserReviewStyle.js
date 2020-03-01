import styled from 'styled-components';

const UserReviewWrapper = styled.div`
  padding: 10px;
  margin-bottom: 1rem;
`;

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
  background-color: #17408B;
  color: #C9082A;
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

const ReviewContents = styled.div`
  & > span {
    line-height: 1.3rem;
  }

  & > div {
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    color: #17408B;
    background-color: transparent;
    margin: 0.3rem 0;
    text-align: right;
    padding: 0 1rem;
  }
`;

export default { 
  UserReviewWrapper,
  UserProfile,
  UserProfileAvatar,
  UserProfileNickname,
  ReviewContents,
};