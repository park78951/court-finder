import styled from 'styled-components';

const ReviewContent = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;

    & > h3 {
      margin: 0;
    }

    &> div {
      & > span {
        margin-right: 15px;
      }
    }
  }

  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default { ReviewContent };