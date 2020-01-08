import styled from 'styled-components';
import { flexBox } from '../../../../styles';

const HeaderTitleStyle = styled.div`
  ${ flexBox.displayFlex() };
  padding: 10px 0;
  & > button {
    ${ flexBox.displayFlex() };
    ${ flexBox.justifyContent('center') };
    ${ flexBox.alignItems('center') };
    padding: 0;
    margin: 0 20px 0 5px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  & > p {
    ${ flexBox.flex(1) };
    font-weight: bold;
    font-size: 1.4rem;
    margin: 0;
    line-height: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default { HeaderTitleStyle };