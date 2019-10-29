import React, { useState, useContext } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import { IoIosSearch } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
import Style from './InputBarStyle';
import PropTypes from 'prop-types';

const InputBar = ({ location, history }) => {
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

    if(location.pathname !== '/search') history.push('/search');
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
          <IoIosSearch size={ 30 } />
        </button>
      </form>
    </Style.InputContainer>
  );
};

InputBar.propTypes = {
  getUserInput: PropTypes.func
};

export default withRouter(InputBar);