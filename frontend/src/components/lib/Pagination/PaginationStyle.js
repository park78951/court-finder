import styled from 'styled-components';
import { borderLine } from '../../../styles';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border: 0.1rem solid ${ borderLine };
  position: absolute;
  bottom: 0;
  width: 100%;

  & button {
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .arrow-btn {
    display: flex;
    align-items: center;
  }

  .number-btns {
    line-height: 100%;
    flex: 1;
    height: 100%;
    
    & > button {
      font-size: 1.2rem;
      line-height: 
    }
  }
  
`;

export default { PaginationWrapper };