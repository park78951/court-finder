import styled from 'styled-components';
import { defaultTheme } from '@styles';

const NickChangerModal = styled.form`
  width: 27rem;
  height: 15rem;
  padding: 3.5rem 3rem 1rem 3rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > .close-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  & > p {
    margin-top: 0.8rem;
    color: ${ defaultTheme.explanation };
    line-height: 1.3rem;
  }

  & input {
    width: 100%;
    border: 1px solid ${({ isValidate }) => isValidate ? '#1E90FF' : '#b20000'};
    box-shadow: 0px 0px 3px 4px ${({ isValidate }) => isValidate ? '#73C2FB' : '#fdbcb4'};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
  }

  & button {
    width: 100%;
  }
`;

export default { NickChangerModal };