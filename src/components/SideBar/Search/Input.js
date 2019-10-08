import React, { useState, useContext } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { IoIosSearch } from 'react-icons/io';
import Style from './InputStyle';


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
    <Style.InputContainer onSubmit={ inputSubmit }>
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
    </Style.InputContainer>
  );
};

export default Input;