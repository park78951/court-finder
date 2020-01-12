import styled, { css } from 'styled-components';
import { borderLine } from '../../../styles';

const styleNthChild = function(idx) {
  return css`
    &:nth-child(${idx + 1}) {
      color: #EC4D37;
      font-weight: bold;
    }
  `;
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 3rem;
  background-color: #fff;
  border: 0.1rem solid ${ borderLine };
  position: absolute;
  bottom: 0;
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;

    & button {
      height: 60%;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 50%;
      
      &:hover {
        background-color: ${ borderLine };
      }
    }

    .arrow-btn {
      display: flex;
      align-items: center;
    }

    .number-btns {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      
      
      
      & > button {
        ${ ({ currentPage, numbersOnList }) => styleNthChild((currentPage - 1) % numbersOnList) }
        line-height: 1rem;
        width: 2rem;
      }
    }
  }

  
`;

export default { PaginationWrapper };