import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Button } from '@components/lib';
import { startSearchingCourts, getUserInput } from '@actions';
import { 
  buttonTheme,
  refetchBtnStyle
} from '@initConfig';
import Style from './RefetchStyle';

const Refetch = () => {
  const { color, size } = refetchBtnStyle;
  const dispatch = useDispatch();
  const { userInput, filterInput, page } = useSelector(state => ({
    userInput: state.storeOnSearch.userInput,
    page: state.storeOnSearch.currentPage,
    filterInput: state.storeOnFilter.filterInput,
  }));

  const refetchRequestor = useCallback(() => {
    dispatch(startSearchingCourts({
      userInput, 
      filterInput, 
      page: page || 1,
    }));
    getUserInput(userInput);
  }, [userInput, filterInput]);

  return (
    <ThemeProvider theme={ buttonTheme }>
      <Style.RefetchWrapper>
        <p>네트워크 장애로 다시 요청해주세요.</p>
        <Button
          size={ size }
          color={ color }
          onClick={ refetchRequestor }
        >
          새로고침
        </Button>
      </Style.RefetchWrapper>
    </ThemeProvider>
  );
};

export default Refetch;