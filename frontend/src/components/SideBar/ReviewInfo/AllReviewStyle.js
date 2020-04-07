import styled from 'styled-components';
import { defaultTheme } from '@styles';

const CommentsHeader = styled.div`
  padding: 0 15px;
  margin-top: 2rem;
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

export default { AllReviews, CommentsHeader };