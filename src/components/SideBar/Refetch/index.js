import React, { useContext } from 'react';
import CustomButton from '../../lib/Button';
import { CourtContext } from '../../../courtStore/CourtStore';
import { ThemeProvider } from 'styled-components';
import { 
  buttonTheme,
  refetchBtnStyle
} from '../../../config/initConfig';
import Style from './indexStyle';

const Refetch = () => {
  const { refetchData } = useContext(CourtContext);
  const { color, size } = refetchBtnStyle;

  return (
    <ThemeProvider theme={ buttonTheme }>
      <Style.RefetchWrapper>
        <p>네트워크 장애로 다시 요청해주세요.</p>
        <CustomButton
          size={ size }
          color={ color }
          onClick={ () => refetchData() }
        >
          새로고침
        </CustomButton>
      </Style.RefetchWrapper>
    </ThemeProvider>
  );
};

export default Refetch;