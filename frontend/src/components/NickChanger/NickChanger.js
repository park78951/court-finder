import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosClose } from "react-icons/io";
import { Input, Button } from '../lib/index';
import { closeNicknameChanger} from '@actions';
import { useDebounceValue } from '@hooks';
import { isValidString } from '@myUtils';
import Style from './NickChangerStyle';

const NickChanger = () => {
  const [term, setTerm] = useState('');
  const [isValid, setIsValid] = useState(false);
  const debouncedTerm = useDebounceValue(term, 500);
  const dispatch = useDispatch();

  const submitNickname = useCallback(evt => {
    evt.preventDefault();
    // nickname change request
  }, []);

  const inputText = useCallback(evt => {
    setTerm(evt.target.value);
  }, [term]);

  const closeModal = useCallback(() => {
    dispatch(closeNicknameChanger());
  });

  useEffect(() => {
    const isValidTermLength = isValidString(debouncedTerm, 40);
    if(isValidTermLength) {
      // fetch data to backend api
      setIsValid(false);
    }
  }, [debouncedTerm]);

  return (
    <Style.NickChangerModal
      isValid={ isValid }
    >
      <div 
        className='close-icon'
        onClick={ closeModal }
      >
        <IoIosClose 
          size={40}
        />
      </div>
      <Input 
        size='large'
        placeholder='닉네임'
        onChange={ inputText }
        />
      <Button
        color='acceptance'
        onClick={ submitNickname }
        type='submit'
        >
        확인
      </Button>
      <p>닉네임은 영문 4자, 한글 2자 이상 중복되지 않도록 변경해주세요.</p>
    </Style.NickChangerModal>
  );
};

export default NickChanger;