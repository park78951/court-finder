import styled from 'styled-components';
import { interfaceStyles, defaultTheme } from '@styles';

const AddReviewFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 30rem;
  width: 35rem;
  background-color: ${defaultTheme.WHITE};
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
  ${ interfaceStyles.scrollbar };
  max-height: 14rem;
  overflow-y: auto;
`;

const TextForm = styled.div`
  min-height: 6rem;
  width: 32rem;
  padding-left: 3.8rem;
  white-space: nowrap;

  & > textarea {
    background-color: ${defaultTheme.POST_MODAL_BACKGROUND};
    border-bottom: 2px solid ${defaultTheme.POST_MODAL_BORDER_BOTTOM};
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
  TextForm,
  PostUIWrapper,
  buttonsWrapper,
};