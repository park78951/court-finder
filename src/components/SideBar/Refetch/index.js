import React from 'react';
import CustomButton from '../../lib/Button';
import { useDispatch } from 'react-redux';
import { searchCourts } from '../../../actions';
import { ThemeProvider } from 'styled-components';
import { 
  buttonTheme,
  refetchBtnStyle
} from '../../../config/initConfig';
import Style from './indexStyle';

const Refetch = () => {
  const dispatch = useDispatch();
  const { color, size } = refetchBtnStyle;

  return (
    <ThemeProvider theme={ buttonTheme }>
      <Style.RefetchWrapper>
        <p>네트워크 장애로 다시 요청해주세요.</p>
        <CustomButton
          size={ size }
          color={ color }
          onClick={ () => dispatch(searchCourts()) }
        >
          새로고침
        </CustomButton>
      </Style.RefetchWrapper>
    </ThemeProvider>
  );
};

export default Refetch;