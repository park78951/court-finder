import React, { useState, useContext } from 'react';
import { CourtContext } from '../../../storage/CourtStore';
import { IoIosSearch } from 'react-icons/io';

import styled from 'styled-components';

const InputContainer = styled.div`
  width: 80%;
  height: 100%;

  form {
    display: flex;
    height: 100%;
    width: 100%;
    align-content: center;
    overflow: hidden;

    input {
      border: none;
      height: 100%;
      width: 80%;
      padding: 0 0 0 10px;
      font-size: 1.3rem;
    }

    button {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
    }
  }
`;

const Input = () => {
  const [term, setTerm] = useState('');
  const { getUserInput } = useContext(CourtContext);

  const setInput = ({ target }) => {
    const { value } = target;
    setTerm(value);
  };

  const inputSubmit = evt => {
    evt.preventDefault();
    getUserInput(term);
    setTerm('');
  };

  return (
    <InputContainer onSubmit={ inputSubmit }>
      <form>
        <input 
          type='text'
          placeholder='Court-Finder 검색'
          onChange={ setInput }
          value={ term }
        />
        <button type='submit'>
          <IoIosSearch size={ 40 } />
        </button>
      </form>
    </InputContainer>
  );
};

export default Input;