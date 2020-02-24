import styled from 'styled-components';

const UserWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #696969;
  border-radius: 2rem;

  & > .user__name {
    text-align: center;
    line-height: 2.5rem;
    font-weight: bold;
    color: #fff;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

`;

export default { UserWrapper };