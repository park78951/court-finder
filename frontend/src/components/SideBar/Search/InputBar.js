import React, { forwardRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import Style from './InputBarStyle';

const InputBar = forwardRef((
  { onChangeTerm, inputSubmit, term }, 
  ref
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
  onChangeTerm: PropTypes.func.isRequired,
  inputSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};

export default React.memo(InputBar);