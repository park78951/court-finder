import styled, { css } from 'styled-components';

const UserReviewWrapper = styled.div`
  padding: 10px;
  background-color: #F5F5F5;
  border-radius: 10px;
  margin-bottom: 10px;

  ${({ noReview }) => {
    if(noReview) {
      return (
        css`
          font-weight: bold;
          font-size: 1.5rem;
          text-align: center;
        `
      );
    }
  }}
`;

export default { UserReviewWrapper };