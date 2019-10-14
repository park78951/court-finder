import React, { useState } from 'react';
import CustomButton from '../lib/Button';
import { FaPlus } from 'react-icons/fa';
import Style from './TagFormStyle';

const TagForm = () => {
  const [tags, setTags] = useState({
    numOfTags: 0,
    tags: []
  });
  return (
    <Style.TagFormStyle>
      <button>
        <FaPlus />
      </button>
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
    </Style.TagFormStyle>
  );
};

export default TagForm;