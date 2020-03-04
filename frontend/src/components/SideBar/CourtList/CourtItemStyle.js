import styled from 'styled-components';
import { defaultTheme } from '@styles';

const CourtItemWrapper = styled.div`
  width: 100%;
  height: 6.5rem;
  box-sizing: border-box;
  border: solid 1px ${defaultTheme.BORDERLINE};
  padding: 1rem 1rem;

  &:hover {
    background-color: ${defaultTheme.COURTITEM_HOVER};
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
  }
  
  & > h4 {
    display: inline-block;
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  & > span {
    display: inline-block;
    color: ${defaultTheme.EXPLANATION_SECOND};
    margin-left: 10px;
    font-size: 0.9rem;
  }

  & > div {
    margin-top: 15px;

    & > p {
      margin:5px 0;
      font-size: 0.9rem;
    }
  }
`;

export default { CourtItemWrapper };