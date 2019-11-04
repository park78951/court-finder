import React, { useState } from 'react';
import CustomDropDown from '../lib/DropDown';
import CustomInput from '../lib/Input';
import CustomButton from '../lib/Button';
import { 
  TRANSPORTATION, 
  ADD_COURTS,
  PLACEHOLDER_PARKING_LOT,
  PLACEHOLDER_PHONE_NUM,
  PLACEHOLDER_TRANSPORT_DETAIL,
  PLACEHOLDER_TRANSPORT_STOP,
  PLACEHOLDER_WEB_URL,
} from '../../config/constants';
import Style from './AdditionalFormStyle';
import PropTypes from 'prop-types';

const AdditionalForm = ({ 
  moveNext, 
  movePrev,
  courtsDispatch
}) => {  
  const [formContents, setFormContents] = useState({
    transpmethod: '',
    transpdetail: '',
    transpstop: '',
    web: '',
    phone: '',
    parkingLot: ''
  });

  const setData = ({ target }) => {
    const { value, name } = target;
    const contentsDuplicate = { ...formContents };
    contentsDuplicate[name] = value;
    setFormContents({ ...contentsDuplicate });
  };

  const nextClickHandler = () => {
    courtsDispatch({ type: ADD_COURTS, payload: formContents });
    moveNext();
  };

  return (
    <Style.AdditionalFormStyle>
      <div>
        <p>교통편</p>
        <div className='input__container--transportation'>
          <CustomDropDown 
            optionValues={ TRANSPORTATION }
            name='transpmethod'
            onChange={ setData }
          />
          <div>
            <CustomInput 
              placeholder={ PLACEHOLDER_TRANSPORT_STOP }
              size='medium'
              name='transpstop'
              onChange={ setData }
            />
            <CustomInput 
              placeholder={ PLACEHOLDER_TRANSPORT_DETAIL }
              size='medium'
              name='transpdetail'
              onChange={ setData }
            />
          </div>
        </div>
        <p>웹사이트</p>
        <CustomInput 
          placeholder={ PLACEHOLDER_WEB_URL }
          name='web'
          onChange={ setData }
        />
        <p>전화번호</p>
        <CustomInput 
          placeholder={ PLACEHOLDER_PHONE_NUM }
          name='phone'
          onChange={ setData }
        />
        <p>주차장</p>
        <CustomInput 
          placeholder={ PLACEHOLDER_PARKING_LOT }
          name='parkingLot'
          onChange={ setData }
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
          onClick={ nextClickHandler }
        >
          다음
        </CustomButton>
      </div>
    </Style.AdditionalFormStyle>
  );
};

AdditionalForm.propTypes = {
  moveNext: PropTypes.func,
  movePrev: PropTypes.func,
  courtsDispatch: PropTypes.func
};

export default AdditionalForm;