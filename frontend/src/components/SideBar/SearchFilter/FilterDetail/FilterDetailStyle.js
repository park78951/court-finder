import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const DetailWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0 2rem 0;

  & > .dropdown__menus {
    & > div {
    margin-top: 1rem;

      & > span {
        display: inline-block;
        width: 6rem;
        text-align: right;
        font-size: 1.03rem;
        margin-right: 2rem;
      }
    }
  }

  .button__apply {
    margin-top: 2.3rem;
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('space-evenly') };
    ${ flexBox.flexWrap('wrap') };
  }
`;

export default { DetailWrapper };