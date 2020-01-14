import styled from 'styled-components';

const CourtItemWrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  box-sizing: border-box;
  border-bottom: solid 1px #D3D3D3;
  padding: 1.5rem 1rem;

  &:hover {
    background-color: #F8F8F8;
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
  }
  
  & > h3 {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  & > span {
    display: inline-block;
    color: #383838;
    margin-left: 10px;
  }

  & > div {
    margin-top: 15px;

    & > p {
      margin:5px 0;
    }
  }
`;

export default { CourtItemWrapper };