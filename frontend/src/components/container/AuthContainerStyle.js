import styled from 'styled-components';

const AuthContainerWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: 0px 0px 2px 0px #000019;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default { AuthContainerWrapper };