import React, { useState } from 'react';
import CustomInput from '../lib/Input';
import CustomDropDown from '../lib/DropDown';
import CustomButton from '../lib/Button';
import { INDOOR_OR_OUTDOOR, PLAYER_LEVEL, TIME_DIVISION_AVAILABLE, TIME_DIVISION_HOURS, TIME_DIVISION_MINUTES } from '../../config/constants';
import { checkUnfilled } from '../../helper/myUtil';
import Style from './BasicFormStyle';

const BasicForm = ({ moveNext }) => {
  const [newData, setNewData] = useState({
    locationName: null, 
    indoorOutdoor: null,
    visitorLevel: null,
    fee: null
  });

  const setData = (dataName) => ({ target }) => {
    const tempStore = {};
    tempStore[dataName] = target.value;
    setNewData({...newData, ...tempStore});
  };

  const keepCurData = () => {
    if(checkUnfilled(newData)) return;
    moveNext(newData);
    setNewData({
      locationName: null, 
      indoorOutdoor: null,
      visitorLevel: null,
      fee: null
    });
  };

  // const clickNextHandler = () => {
    
  // }

  return (
    <Style.BasicFormWrapper>
      <div>
        <p>장소명</p>
        <CustomInput 
          placeholder='ex) 해운대 농구코트'
          onChange={ setData('locationName') }
        />
        <p>실내외 여부</p>
        <CustomDropDown 
          optionValues={ INDOOR_OR_OUTDOOR } 
          onChange={ setData('indoorOutdoor') }
        />
        <p>방문 농구인 Level</p>
        <CustomDropDown 
          optionValues={ PLAYER_LEVEL } 
          onChange={ setData('visitorLevel') }
        />
        <p>사용료</p>
        <div className='fee__container--input'>
          <CustomDropDown 
            optionValues={ TIME_DIVISION_AVAILABLE }
            size='large'
          />
          <CustomInput 
            placeholder='ex) 무료 / 3000' 
            onChange={ setData('fee') }
            size='medium'
          />
        </div>
        <p>사용가능 시간</p>
        <div className='input__container--available-time'>
          <CustomDropDown 
            optionValues={ TIME_DIVISION_HOURS }
            size='small'
          />
          <span> : </span>
          <CustomDropDown 
            optionValues={ TIME_DIVISION_MINUTES }
            size='small'
          />
          <span> ~ </span>
          <CustomDropDown 
            optionValues={ TIME_DIVISION_HOURS }
            size='small'
          />
          <span> : </span>
          <CustomDropDown 
            optionValues={ TIME_DIVISION_MINUTES }
            size='small'
          />
        </div>
      </div>
      <div className='button__container'>
        <CustomButton
          onClick={ keepCurData }
          size='large'
        >
          다음
        </CustomButton>
      </div>
    </Style.BasicFormWrapper>
  );
};

export default BasicForm;