import React, { useContext } from 'react';
import { CourtContext } from '../../courtStore/CourtStore';
import { buttonTheme} from '../../config';
import { INDOOR_OR_OUTDOOR, PLAYER_LEVEL, TRANSPORTATION } from '../../config/constants';
import CustomDropDown from '../lib/DropDown';
import CustomButton from '../lib/Button';
import CustomInput from '../lib/Input';
import styled, { ThemeProvider } from 'styled-components';


const AdditionFormWrapper = styled.div`
  display: ${ ({ isOpen }) => isOpen ? 'block' : 'none' };
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 15px;
  padding: 20px 50px;
  overflow: scroll;
  overflow-x: hidden;
  
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 20px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }


  p {
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 20px 0 10px 0;
  }

  .dropdown_input {
    display: flex;
    justify-content: space-between;
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0;
  }
`;

const PlaceAddition = () => {
  const { isPlaceAdditionOpen } = useContext(CourtContext);

  return (
    <ThemeProvider theme={ buttonTheme }>
      <AdditionFormWrapper isOpen={isPlaceAdditionOpen}>
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
            >
              취소
            </CustomButton>
          </div>
          

        </form>
        
      </AdditionFormWrapper>
    </ThemeProvider>
  );
};

export default PlaceAddition;