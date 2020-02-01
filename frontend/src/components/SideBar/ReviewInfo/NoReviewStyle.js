import Style from './UserReviewStyle';
import styled from 'styled-components';

const NoReviewWrapper = styled(Style.UserReviewWrapper)`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;

  & > p {
    height: 5rem;
    line-height: 5rem;
  }
`;

export default { NoReviewWrapper };