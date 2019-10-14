import styled from 'styled-components';

const AdditionFormWrapper = styled.div`
  display: ${ ({ isOpen }) => isOpen ? 'block' : 'none' };
  width: 500px;
  height: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
  padding: 20px 50px;

  & > form {
    margin-top: 30px;
  }
  /* overflow: scroll; */
  /* overflow-x: hidden; */
  
  /* &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 20px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  } */

  & > button {
    position: absolute;
    right: 30px;
    top: 40px;
    border: none;
    background: transparent;
    outline: none;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
  }

  p {
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 20px 0 10px 0;
  }

  .dropdown_input {
    display: flex;
    justify-content: space-between;
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0;
  }
`;

export default { AdditionFormWrapper };