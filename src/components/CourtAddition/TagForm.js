import React, { useState, useMemo, useCallback, useEffect } from 'react';
import CustomButton from '../lib/Button';
import CustomInput from '../lib/Input';
import { createUniqueKey } from '../../helper/myUtil';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Style from './TagFormStyle';

const TagForm = ({ movePrev, moveNext }) => {
  const [tagList, setTagList] = useState({
    tag1: null,
    tag2: undefined,
    tag3: undefined,
    tag4: undefined,
    tag5: undefined
  });
  const [term, setTerm] = useState('');

  const storeTerm = ({ target }) => {
    const { value } = target;
    setTerm(value);
  };

  const storeTag = useCallback(tagName => () => {
    setTagList({
      ...tagList,
      [tagName]: term
    });
  }, [term]);

  const addTagInputs = () => {
    if(tagList.tag5 !== undefined) return;
    const targetIndex = Object.values(tagList).indexOf(undefined);
    const targetTag = 'tag' + (targetIndex + 1);

    setTagList({
      ...tagList, 
      [targetTag]: null
    });
  };

  const deleteTagInputs = () => {
    if(tagList.tag2 === undefined) return;
    const targetIndex = Object.values(tagList).lastIndexOf(null);
    const targetTag = 'tag' + (targetIndex + 1);

    setTagList({
      ...tagList,
      [targetTag]: undefined
    });
  };

  const clicker = () => {
    console.log(tagList);
  }

  const InputsAddingTags = useMemo(() => {
    return Object.keys(tagList).map((tagName) => {
      if(tagList[tagName] === undefined) return;
      return (
        <CustomInput 
          placeholder='5글자 이하'
          size='medium'
          key={ createUniqueKey()}
          onChange={ storeTerm }
          onBlur={ storeTag(tagName) }
          onClick={ clicker }
        />
      );
    });
  }, [tagList]);

  return (
    <Style.TagFormStyle>
      <div className='tag__container'>
        <p>태그</p>
        <div>
          <button onClick={ deleteTagInputs }>
            <FaMinus size={ 20 }/>
          </button>
          <button onClick={ addTagInputs }>
            <FaPlus size={ 20 }/>
          </button>
        </div>
      </div>
      <div className='tag__inputs'>
        { InputsAddingTags }
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
    </Style.TagFormStyle>
  );
};

export default TagForm;