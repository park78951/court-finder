import styled from 'styled-components';
import { defaultTheme } from '@styles';

const UserReviewWrapper = styled.div`
  padding: 10px;
  margin-bottom: 1rem;
`;

const ReviewContents = styled.div`
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

const ContentsWrapper = styled.p`
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
`;

const DateWrapper = styled.p`
  padding-right: 0.5rem;
  text-align: right;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: gray;
`;

export default { 
  UserReviewWrapper,
  ReviewContents,
  ContentsWrapper,
  DateWrapper,
};