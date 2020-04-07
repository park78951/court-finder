import styled from 'styled-components';
import { defaultTheme } from '@styles';

const CommentsHeader = styled.div`
  padding: 0 15px;
  margin-top: 2rem;
`;

const MyReview = styled.div`
  margin-bottom: 1rem;
  padding: 20px 15px 0 15px;
`;

const AddReviewBtn = styled.div`
  padding: 0 6.75rem;
  & > button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid ${defaultTheme.BORDERLINE};
    border-radius: 25px;
    background-color: ${defaultTheme.WHITE};
    height: 2.5rem;
    width: 8rem;
    cursor: pointer;

    &:hover {
      background-color: ${defaultTheme.REVIEW_BUTTON_BACKGROUND};
    }

    & > svg {
      color: ${defaultTheme.LOGO_BACKGROUND};
    }

    & > span {
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

export default { CommentsHeader, MyReview, AddReviewBtn };