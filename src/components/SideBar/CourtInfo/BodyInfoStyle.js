import styled from 'styled-components';

const BodyInfoWrapper = styled.div`
  flex: 1;
  width: 100%;
  border: #D3D3D3;

  & > ul {
    display: flex;
    justify-content: start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;

    & > li {
      display: inline-block;
      margin-left: 10px;
      padding: 3px;
      border: 1px solid #D3D3D3;
      border-radius: 5px;
    }
  }
`;

export default { BodyInfoWrapper };