import React, { useState } from 'react';
import { Button, Input, DropDown } from '../lib';
import { 
  TRANSPORTATION, 
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
  dispatch,
  addCourts
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
    dispatch(addCourts(formContents));
    moveNext();
  };

  return (
    <Style.AdditionalFormStyle>
      <div>
        <p>교통편</p>
        <div className='input__container--transportation'>
          <DropDown 
            optionValues={ TRANSPORTATION }
            name='transpmethod'
            onChange={ setData }
          />
          <div>
            <Input 
              placeholder={ PLACEHOLDER_TRANSPORT_STOP }
              size='medium'
              name='transpstop'
              onChange={ setData }
            />
            <Input 
              placeholder={ PLACEHOLDER_TRANSPORT_DETAIL }
              size='medium'
              name='transpdetail'
              onChange={ setData }
            />
          </div>
        </div>
        <p>웹사이트</p>
        <Input 
          placeholder={ PLACEHOLDER_WEB_URL }
          name='web'
          onChange={ setData }
        />
        <p>전화번호</p>
        <Input 
          placeholder={ PLACEHOLDER_PHONE_NUM }
          name='phone'
          onChange={ setData }
        />
        <p>주차장</p>
        <Input 
          placeholder={ PLACEHOLDER_PARKING_LOT }
          name='parkingLot'
          onChange={ setData }
        />
      </div>
      <div className='button__container--two-btn'>
        <Button 
          color={ 'cancel' }
          onClick={ movePrev }
        >
          이전
        </Button>
        <Button
          onClick={ nextClickHandler }
        >
          다음
        </Button>
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