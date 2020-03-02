import styled from 'styled-components';
import { interfaceStyles } from '@styles';

const ReviewInfoWrapper = styled.div`
  height: 74%;
  background: /* Shadow covers */
  linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
  radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background: /* Shadow covers */
  linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
  radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
  ${interfaceStyles.slidebar}
  

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
    border-bottom: 1px solid #D3D3D3;
    margin-top: 1.5rem;
  }
`;

const AddReviewBtn = styled.div`
  padding: 0 6.75rem;
  & > button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #D3D3D3;
    border-radius: 25px;
    background-color: #fff;
    height: 2.5rem;
    width: 8rem;
    cursor: pointer;

    &:hover {
      background-color: #F5F5F5;
    }

    & > svg {
      color: #17408B;
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
      border-bottom: 1px solid #D3D3D3;
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