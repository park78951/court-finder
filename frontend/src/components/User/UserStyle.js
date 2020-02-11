import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid black;
  border-radius: ${({ isLoggedIn }) => isLoggedIn ? '50%' : '25%'};
  background-color: #E8E8E8;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;

export default { UserWrapper };