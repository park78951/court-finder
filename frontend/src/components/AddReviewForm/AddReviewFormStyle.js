import styled from 'styled-components';
import { interfaceStyles } from '@styles';

const AddReviewFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 30rem;
  width: 35rem;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 2rem 1rem 1rem 1rem;

  & > h2 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const PostUIWrapper = styled.div`
  ${ interfaceStyles.slidebar };
  max-height: 14rem;
  overflow-y: auto;
  padding: 1rem 0;
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

const TextForm = styled.div`
  min-height: 6rem;
  width: 32rem;
  padding-left: 3.8rem;
  white-space: nowrap;

  & > textarea {
    background-color: #f8f8f8;
    border-bottom: 2px solid #0080FF;
    border-image: none 100% 1 0px stretch;
    border-left: none;
    border-right: none;
    border-top: none;
    min-height: 6rem;
    padding: 10px;
    width: 28rem;
    word-break: 0px;
    writing-mode: horizontal-tb;
    resize: none;
    cursor: text;
    outline: none;
  }
`;

const buttonsWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: space-between;
  width: 18.5rem;
`;

export default { 
  AddReviewFormWrapper,
  UserProfile,
  UserProfileAvatar,
  UserProfileNickname,
  TextForm,
  PostUIWrapper,
  buttonsWrapper,
};