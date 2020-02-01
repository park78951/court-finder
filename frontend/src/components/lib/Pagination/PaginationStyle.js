import styled, { css } from 'styled-components';
import { borderLine } from '@styles/theme';

const styleNthChild = function(idx) {
  return css`
    &:nth-child(${idx + 1}) {
      color: #EC4D37;
      font-weight: bold;
      pointer-events: none;
    }
  `;
};

const PaginationWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  height: 2.3rem;
  background-color: #fff;
  border: 0.1rem solid ${ borderLine };
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
      padding: 0;
      width: 1.5rem;

      
      &:hover {
        background-color: ${ borderLine };
      }
    }

    .arrow-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .number-btns {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      
      & > button {
        ${ ({ currentPage, numbersOnList }) => styleNthChild((currentPage - 1) % numbersOnList) }
        line-height: 1rem;
      }
    }
  }

  
`;

export default { PaginationWrapper };