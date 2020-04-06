import styled from 'styled-components';
import { defaultTheme } from '@styles';

const DeleteReviewWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 10rem;
  width: 30rem;
  background-color: ${defaultTheme.WHITE};
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 2rem 1rem;

  & > h2 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
`;

export default { DeleteReviewWrapper, ButtonWrapper };