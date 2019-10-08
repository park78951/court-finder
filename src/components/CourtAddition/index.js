import React, { useContext } from 'react';
import { CourtContext } from '../../courtStore/CourtStore';
import { buttonTheme} from '../../config';
import { INDOOR_OR_OUTDOOR, PLAYER_LEVEL, TRANSPORTATION, CLOSE_COURTADDITION } from '../../config/constants';
import CustomDropDown from '../lib/DropDown';
import CustomButton from '../lib/Button';
import CustomInput from '../lib/Input';
import { ThemeProvider } from 'styled-components';
import Styles from './indexStyle';


const CourtAddition = () => {
  const { 
    courtAdditionFlag, 
    uiToggleDispatch 
  } = useContext(CourtContext);

  const closeModal = evt => {
    evt.preventDefault();
    uiToggleDispatch({ type: CLOSE_COURTADDITION });
  };

  return (
    <ThemeProvider theme={ buttonTheme }>
      <Styles.AdditionFormWrapper isOpen={courtAdditionFlag}>
        <h1>장소추가</h1>
        <form>
          <p>장소명</p>
          <CustomInput placeholder='ex) 해운대 농구코트' />
          <p>실내외 여부</p>
          <CustomDropDown optionValues={ INDOOR_OR_OUTDOOR } />
          <p>방문 농구인 Level</p>
          <CustomDropDown optionValues={ PLAYER_LEVEL } />
          <p>유/무료 여부</p>
          <CustomInput placeholder='ex) 유료' />
          <p>교통편</p>
          <div className='dropdown_input'>
            <CustomDropDown optionValues={ TRANSPORTATION } />
            <CustomInput placeholder='ex) 3004번 / 2호선' size='medium' />
          </div>
          <div className='btn-container'>
            <CustomButton>
              등록
            </CustomButton>
            <CustomButton 
              color='cancel'
              onClick={ closeModal }
            >
              취소
            </CustomButton>
          </div>
        </form>
        
      </Styles.AdditionFormWrapper>
    </ThemeProvider>
  );
};

export default CourtAddition;