import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosClose } from "react-icons/io";
import { Input, Button } from '../lib/index';
import Style from './NickChangerStyle';

const NickChanger = () => {
  const [term, setTerm] = useState('');
  const [isValidate, setIsVlidate] = useState(false);
  const dispatch = useDispatch();

  const submitNickname = useCallback(evt => {
    evt.preventDefault();
    
  }, []);

  const inputText = useCallback(evt => {
    setTerm(evt.target.value);
  }, [term]);

  return (
    <Style.NickChangerModal
      isValidate={ isValidate }
    >
      <div className='close-icon'>
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