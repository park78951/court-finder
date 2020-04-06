import styled from 'styled-components';
import { defaultTheme } from '@styles';

const NickChangerModal = styled.form`
  width: 27rem;
  height: 18rem;
  padding: 2rem 3rem 1rem 3rem;
  background-color: ${defaultTheme.WHITE};
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
    color: ${defaultTheme.PASS_LETTER};
  }

  & .nickname__impossible {
    color: ${defaultTheme.FAIL_LETTER};
  }

  & > p {
    margin-top: 0.5rem;
    color: ${defaultTheme.EXPLANATION};
    line-height: 1.3rem;
  }

  & input {
    width: 100%;
    border: 1px solid ${({ isValid }) => isValid 
      ? `${defaultTheme.PASS_BORDER}` 
      : `${defaultTheme.FAIL_BORDER}`};
    box-shadow: 0px 0px 3px 4px ${({ isValid }) => isValid 
      ? `${defaultTheme.PASS_SHADOW}`
      : `${defaultTheme.FAIL_SHADOW}`};
    border-radius: 0.2rem;
    margin-bottom: 0.5rem;
    outline: none;
  }

  & button {
    width: 100%;
    margin-top: 0.7rem;
  }
`;

export default { NickChangerModal };