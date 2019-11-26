import React from 'react';
import CustomButton from '../../lib/Button';
import { useDispatch, useSelector } from 'react-redux';
import { searchCourts } from '../../../actions';
import { ThemeProvider } from 'styled-components';
import { 
  buttonTheme,
  refetchBtnStyle
} from '../../../config/initConfig';
import Style from './indexStyle';

const Refetch = () => {
  const { color, size } = refetchBtnStyle;
  const dispatch = useDispatch();
  const { userInput, filterData } = useSelector(state => ({
    userInput: state.storeOnSearch.userInput,
    filterData: state.storeOnFilter.filterData
  }));

  return (
    <ThemeProvider theme={ buttonTheme }>
      <Style.RefetchWrapper>
        <p>네트워크 장애로 다시 요청해주세요.</p>
        <CustomButton
          size={ size }
          color={ color }
          onClick={ () => dispatch(searchCourts(userInput, filterData)) }
        >
          새로고침
        </CustomButton>
      </Style.RefetchWrapper>
    </ThemeProvider>
  );
};

export default Refetch;