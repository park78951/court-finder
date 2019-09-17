import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 80%;
  overflow: hidden;

  form {
    height: 100%;
    width: 100%;
  }

  input {
    border: none;
    height: 100%;
    width: 100%;
    padding: 0 0 0 10px;
    font-size: 1.3rem;
  }

`

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
  )
}

export default Input;