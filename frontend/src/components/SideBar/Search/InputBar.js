import React, { forwardRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import Style from './InputBarStyle';

const InputBar = forwardRef((
  { 
    onChangeTerm, 
    inputSubmit, 
    term 
  },
  ref,
  ) => (
    <Style.InputContainer>
      <form onSubmit={ inputSubmit }>
        <input 
          type='text'
          placeholder='Court-Finder 검색'
          onChange={onChangeTerm}
          value={term}
          ref={ref}
        />
        <button type='submit'>
          <IoIosSearch size={30} />
        </button>
      </form>
    </Style.InputContainer>
));

InputBar.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default React.memo(InputBar);