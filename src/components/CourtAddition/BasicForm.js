import React, { useState } from 'react';
import CustomInput from '../lib/Input';
import CustomDropDown from '../lib/DropDown';
import CustomButton from '../lib/Button';
import { 
  INDOOR_OR_OUTDOOR, 
  PLAYER_LEVEL, 
  TIME_DIVISION_AVAILABLE, 
  TIME_DIVISION_HOURS, 
  PLACEHOLDER_COURT_NAME,
  PLACEHOLDER_FEE_AMOUNT
} from '../../config/constants';
import { checkUnfilled } from '../../myUtil';
import Style from './BasicFormStyle';
import PropTypes from 'prop-types';

const BasicForm = ({ 
  moveNext, 
  dispatch,
  addCourts 
}) => {
  const [formContents, setFormContents] = useState({
    locationName: '', 
    indoorOutdoor: '',
    visitorLevel: '',
    feeAmount: '',
    feeTime: '',
    openTime: '',
    closeTime: ''
  });

  const setData = ({ target }) => {
    const { value, name } = target;
    const contentsDuplicate = { ...formContents };
    contentsDuplicate[name] = value;
    setFormContents({ ...contentsDuplicate });
  };

  const nextClickHandler = () => {
    if(!checkUnfilled(formContents)) {
      alert('정보를 모두 입력해주세요.');
      return;
    }
    moveNext();
    dispatch(addCourts(formContents));
  };

  return (
    <Style.BasicFormWrapper>
      <div>
        <p>장소명</p>
        <CustomInput 
          name='locationName'
          placeholder={ PLACEHOLDER_COURT_NAME }
          onChange={ setData }
        />
        <p>실내외 여부</p>
        <CustomDropDown 
          name='indoorOutdoor'
          optionValues={ INDOOR_OR_OUTDOOR } 
          onChange={ setData }
        />
        <p>방문 농구인 Level</p>
        <CustomDropDown 
          name='visitorLevel'
          optionValues={ PLAYER_LEVEL } 
          onChange={ setData }
        />
        <p>사용료</p>
        <div className='fee__container--input'>
          <CustomDropDown 
            name='feeTime'
            optionValues={ TIME_DIVISION_AVAILABLE }
            size='large'
            onChange={ setData }
          />
          <CustomInput
            name='feeAmount'
            placeholder={ PLACEHOLDER_FEE_AMOUNT }
            onChange={ setData }
            size='medium'
          />
        </div>
        <p>사용가능 시간</p>
        <div className='input__container--available-time'>
          <CustomDropDown 
            name='openTime'
            optionValues={ TIME_DIVISION_HOURS }
            onChange={ setData }
          />
          <span> ~ </span>
          <CustomDropDown 
            name='closeTime'
            optionValues={ TIME_DIVISION_HOURS }
            onChange={ setData }
          />
        </div>
      </div>
      <div className='button__container'>
        <CustomButton
          onClick={ nextClickHandler }
          size='large'
        >
          다음
        </CustomButton>
      </div>
    </Style.BasicFormWrapper>
  );
};

BasicForm.propTypes = {
  moveNext: PropTypes.func,
  courtsDispatch: PropTypes.func
};

export default BasicForm;