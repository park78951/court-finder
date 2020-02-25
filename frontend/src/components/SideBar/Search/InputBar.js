import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import { requestCourts, unselectCourt } from '@actions';
import { getSearchQueries } from '@myUtils';
import Style from './InputBarStyle';

const InputBar = () => {
  const [term, setTerm] = useState('');
  const { filterInput } = useSelector(({ courts }) => courts);
  const dispatch = useDispatch();
  const router = useRouter();

  const setInput = useCallback(({ target }) => {
    const { value } = target;
    setTerm(value);
  }, []);

  const inputSubmit = useCallback(evt => {
    evt.preventDefault();
    
    dispatch(unselectCourt());
    dispatch(requestCourts({
      userInput: term, 
      filterInput,
      page: 1,
    }));
    setTerm('');

    const searchRoute = getSearchQueries({
      userInput: term,
      city: filterInput.city,
      district: filterInput.district,
      page: 1,
    });
    router.push(searchRoute);
  }, [term, filterInput, router.route]);

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