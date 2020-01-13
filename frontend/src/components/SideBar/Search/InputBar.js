import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

import { startSearchingCourts, unselectCourt } from '../../../actions';
import Style from './InputBarStyle';

const InputBar = () => {
  const [term, setTerm] = useState('');
  const { filterInput } = useSelector(({ storeOnFilter}) => storeOnFilter);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const setInput = useCallback(({ target }) => {
    const { value } = target;
    setTerm(value);
  }, []);

  const inputSubmit = useCallback(evt => {
    evt.preventDefault();
    
    dispatch(unselectCourt());
    dispatch(startSearchingCourts({
      userInput: term, 
      filterInput,
      page: 1
    }));
    setTerm('');

    if(pathname !== '/search') history.push('/search');
  }, [term, filterInput, pathname]);

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
  location: PropTypes.object,
  history: PropTypes.object,
};

export default React.memo(InputBar);