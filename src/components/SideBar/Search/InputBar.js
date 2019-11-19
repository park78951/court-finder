import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCourts } from '../../../actions';
import { IoIosSearch } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
import Style from './InputBarStyle';
import PropTypes from 'prop-types';

const InputBar = ({ location, history }) => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const setInput = ({ target }) => {
    const { value } = target;
    setTerm(value);
  };

  const inputSubmit = evt => {
    evt.preventDefault();
    dispatch(searchCourts(term));
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