import styled from 'styled-components';

const CourtItemWrapper = styled.div`
  width: 100%;
  height: 15vh;
  box-sizing: border-box;
  border: solid 1px #D3D3D3;

  & > h2 {
    display: inline-block;
    margin: 0;
  }
  
  & > span {
    display: inline-block;
    color: #383838;
    font-size: 1.1rem;
  }

  & > p {
    margin: 0;
  }
`;

export default { CourtItemWrapper };