import styled from 'styled-components';

const HeaderTitleStyle = styled.div`
  display: flex;
  padding: 11px 0 9px 4rem;

  & > p {
    flex: 1;
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