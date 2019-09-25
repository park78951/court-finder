import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 80%;
  height: 100%;

  form {
    height: 100%;
    width: 100%;
    overflow: hidden;

    input {
      border: none;
      height: 100%;
      width: 100%;
      padding: 0 0 0 10px;
      font-size: 1.3rem;
    }
  }

`;

const Input = () => {
  return (
    <InputContainer>
      <form>
        <input 
          type='text'
          placeholder='Court-Finder 검색'
        />
      </form>
    </InputContainer>
  );
};

export default Input;