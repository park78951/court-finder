import styled from 'styled-components';

const LoginWrapper = styled.div`
	z-index:100;
  position: relative;
	height: auto;
	padding: 5px;
	border-radius: 5px;
	border: black solid 1px;
  background-color: white;
	position: absolute;
	font-size: 16px;
	text-align: left;
  right: -0.5rem;
  margin-top: 1.5rem;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -18.5px; 
    right: 10px; 
  }

  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #7F7F7F transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -20px;
    right: 10px; 
  }

  & > button {
    padding: 0;
    border: none;
    height: 2.5rem;

    & > img {
      height: 100%;
    }
  }

`;

export default { LoginWrapper };