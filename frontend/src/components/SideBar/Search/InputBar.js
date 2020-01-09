import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startSearchingCourts, unselectCourt } from '../../../actions';
import { IoIosSearch } from 'react-icons/lib/io';
import { withRouter } from 'react-router-dom';
import Style from './InputBarStyle';
import PropTypes from 'prop-types';

const InputBar = ({ location, history }) => {
  const [term, setTerm] = useState('');
  const { filterData } = useSelector(({ storeOnFilter}) => storeOnFilter);
  const dispatch = useDispatch();

  const setInput = useCallback(({ target }) => {
    const { value } = target;
    setTerm(value);
  }, []);

  const inputSubmit = useCallback(evt => {
    evt.preventDefault();
    
    dispatch(unselectCourt());
    dispatch(startSearchingCourts(term, filterData));
    setTerm('');

    if(location.pathname !== '/search') history.push('/search');
  }, [term, filterData, location]);

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

export default React.memo(withRouter(InputBar));