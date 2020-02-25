import styled from 'styled-components';

const AddressStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 5px 0;

    & > div {
      display: flex;
      font-weight: bold;
      width: fit-content;
    }
    
    & > p {
      display: inline-block;
      margin: 0 5px;;
      font-size: 1.15rem;
    }
`;

export default { AddressStyle };