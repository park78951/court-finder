import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const ReviewContent = styled.div`
  & > div {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-between') };

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