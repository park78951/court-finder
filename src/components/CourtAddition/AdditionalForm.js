import React, { useState } from 'react';
import CustomDropDown from '../lib/DropDown';
import CustomInput from '../lib/Input';
import CustomButton from '../lib/Button';
import { TRANSPORTATION, EXISTENCE_NONEXISTENCE } from '../../config/constants';
import { checkUnfilled } from '../../helper/myUtil';
import Style from './AdditionalFormStyle';

const AdditionalForm = ({ moveNext, movePrev }) => {  
  const [transportation, setTransportation] = useState({
    method: null,
    detail: null,
    stop: null
  });

  const nextClickHandler = () => {
    if(checkUnfilled(transportation)) return;
    moveNext(transportation);
  };

  // const setValuesOnChange = dataName => ({ target }) => {
  //   const tempStore = {};
  //   tempStore[dataName] = target.value;
  //   setTransportation({
  //     ...transportation,
  //     ...tempStore
  //   })
  // }
  return (
    <Style.AdditionalFormStyle>
      <div>
        <p>교통편</p>
        <div className='input__container--transportation'>
          <CustomDropDown 
            optionValues={ TRANSPORTATION }
          />
          <div>
            <CustomInput 
              placeholder='ex) 정거장 / 역이름'
              size='medium'
            />
            <CustomInput 
              placeholder='ex) 3004번 / 2호선'
              size='medium'
            />
          </div>
        </div>
        <p>웹사이트</p>
        <CustomInput 
          placeholder='ex) https://www.court-finder.com'
        />
        <p>전화번호</p>
        <CustomInput 
          placeholder='ex) 02-7777-7777'
        />
        <p>주차장 유무</p>
        <CustomDropDown 
          optionValues={ EXISTENCE_NONEXISTENCE }
        />
      </div>
      <div className='button__container--two-btn'>
        <CustomButton 
          color={ 'cancel' }
          onClick={ movePrev }
        >
          이전
        </CustomButton>
        <CustomButton
          onClick={ moveNext }
        >
          다음
        </CustomButton>
      </div>
    </Style.AdditionalFormStyle>
  );
};

export default AdditionalForm;