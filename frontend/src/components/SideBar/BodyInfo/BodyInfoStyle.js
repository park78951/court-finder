import styled from 'styled-components';
import { defaultTheme } from '@styles';

const BodyInfoWrapper = styled.div`
  height: 74%;
  width: 100%;
  border: ${defaultTheme.BORDERLINE};
  padding: 0 15px;

  & > div {
    display: flex;
    align-items: center;
    margin: 25px 0;

    & > span, a {
      display: inline-block;
      font-size: 1.15rem;
      margin-left: 10px;
    }

    & > span {
      max-width: 300px;
      word-break: keep-all;
    }

    & > a {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  & > ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0 0 0 10px;
    padding: 0;
    text-align: center;

    & > li {
      display: inline-block;
      margin-left: 10px;
      padding: 3px;
      border: ${defaultTheme.BORDERLINE};
      border-radius: 5px;
    }
  }
`;

export default { BodyInfoWrapper };