import styled from 'styled-components';
import { defaultTheme } from '@styles';

const NickChangerModal = styled.form`
  width: 27rem;
  height: 18rem;
  padding: 2rem 3rem 1rem 3rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > h3 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  & > .close-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }

  & .nickname__possible,
    .nickname__impossible {
    font-weight: bold;
  }

  & .nickname__possible {
    color: #1034A6;
  }

  & .nickname__impossible {
    color: #CA3433;
  }

  & > p {
    margin-top: 0.5rem;
    color: ${ defaultTheme.explanation };
    line-height: 1.3rem;
  }

  & input {
    width: 100%;
    border: 1px solid ${({ isValid }) => isValid ? '#1E90FF' : '#b20000'};
    box-shadow: 0px 0px 3px 4px ${({ isValid }) => isValid ? '#73C2FB' : '#fdbcb4'};
    border-radius: 0.2rem;
    margin-bottom: 0.5rem;
  }

  & button {
    width: 100%;
    margin-top: 0.7rem;
  }
`;

export default { NickChangerModal };