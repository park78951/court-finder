import styled from 'styled-components';

const UserWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;

  & > .user__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

`;

export default { UserWrapper };