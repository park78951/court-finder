import React, { useState } from 'react';
import CustomInput from '../lib/Input';
import CustomDropDown from '../lib/DropDown';
import CustomButton from '../lib/Button';
import { INDOOR_OR_OUTDOOR, PLAYER_LEVEL } from '../../config/constants';

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
    moveNext(newData);
    setNewData({
      locationName: null, 
      indoorOutdoor: null,
      visitorLevel: null,
      fee: null
    });
  };

  return (
    <div>
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
        <CustomInput 
          placeholder='ex) 무료' 
          onChange={ setData('fee') }
        />
      </div>
      <CustomButton
        onClick={ keepCurData }
      >
        다음
      </CustomButton>
    </div>
  );
};

export default BasicForm;