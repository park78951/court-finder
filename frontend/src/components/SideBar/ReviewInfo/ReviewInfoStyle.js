import styled from 'styled-components';
import { interfaceStyles, defaultTheme } from '@styles';

const ReviewInfoWrapper = styled.div`
  height: 74%;
  ${interfaceStyles.shadowAboveOnScroll};
  ${interfaceStyles.sidebar};
  

  & h2 {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const CommentsHeader = styled.div`
  padding: 0 15px;
  margin-top: 2rem;
`;

const MyReview = styled.div`
  margin-bottom: 1rem;
  padding: 20px 15px 0 15px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${defaultTheme.BORDERLINE};
    margin-top: 1.5rem;
  }
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

const AllReviews = styled.div`
  padding: 20px 15px 0 15px;

  & > div {
    &:after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 1px solid ${defaultTheme.BORDERLINE};
      margin-top: 1.5rem;
    }
  }
`;

export default { 
  ReviewInfoWrapper,
  CommentsHeader,
  MyReview,
  AddReviewBtn,
  AllReviews,
};