import React, { useCallback } from 'react';
import { Button } from '../../lib';
import { useDispatch, useSelector } from 'react-redux';
import { startSearchingCourts, getUserInput } from '../../../actions';
import { ThemeProvider } from 'styled-components';
import { 
  buttonTheme,
  refetchBtnStyle
} from '../../../config/initConfig';
import Style from './RefetchStyle';

const Refetch = () => {
  const { color, size } = refetchBtnStyle;
  const dispatch = useDispatch();
  const { userInput, filterInput } = useSelector(state => ({
    userInput: state.storeOnSearch.userInput,
    filterInput: state.storeOnFilter.filterInput
  }));

  const refetchRequestor = useCallback(() => {
    dispatch(startSearchingCourts({
      userInput, 
      filterInput, 
      page: 1
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