import styled, { css } from 'styled-components';
import { defaultTheme } from '@styles';

const UserReviewWrapper = styled.div`
  padding: 10px;
  margin-bottom: 1rem;
`;

const ReviewContents = styled.div`
  & > p {
    width: 100%;
    line-height: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    text-align:left;
    word-wrap:break-word;
    display: -webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient: vertical;
  }

  & > div {
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    color: ${defaultTheme.LOGO_BACKGROUND};
    background-color: transparent;
    margin: 0.3rem 0;
    text-align: right;
    padding: 0 1rem;
  }
`;

export default { 
  UserReviewWrapper,
  ReviewContents,
};