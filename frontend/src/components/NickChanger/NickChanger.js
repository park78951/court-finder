import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosClose } from "react-icons/io";
import { Input, Button } from '../lib/index';
import { closeNicknameChanger, requestLogin } from '@actions';
import { useDebounceValue, useNicknameChecker } from '@hooks';
import Style from './NickChangerStyle';

const NickChanger = () => {
  const [term, setTerm] = useState('');
  const debouncedTerm = useDebounceValue(term, 500);
  const { isValid } = useNicknameChecker(debouncedTerm);
  const dispatch = useDispatch();
  const { errorMsg, userId } = useSelector(({ user }) => user);
  
  const closeModal = useCallback(() => {
    dispatch(closeNicknameChanger());
  });

  const inputText = useCallback(evt => {
    setTerm(evt.target.value);
  }, [term]);

  const submitNickname = useCallback(evt => {
    evt.preventDefault();
    if(!isValid) return;

    if(errorMsg === 409) {
      dispatch(requestLogin({
        kakaoId: userId,
        kakaoNickname: debouncedTerm,
      }));
      closeModal();
    }
  }, [debouncedTerm, userId, isValid]);

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
      <h3>닉네임을 변경해주세요.</h3>
      <Input 
        size='large'
        placeholder='닉네임'
        onChange={ inputText }
      />
      <div>
        { isValid
          ? <p className='nickname__possible'>이 닉네임은 사용 가능합니다.</p>
          : <p className='nickname__impossible'>이 닉네임은 사용할 수 없습니다.</p>
        }
      </div>
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