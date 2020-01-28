import { createGlobalStyle } from 'styled-components';
// import { Normalize } from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${ reset }

  @font-face {
    font-family: 'Nanum Gothic Coding', monospace;
    src: url('./assets/fonts/NanumGothicCoding-Bold.ttf'),
      url('./assets/fonts/NanumGothicCoding-Regular.ttf');
  }

  *{
   box-sizing: border-box; 
  }
  
  body {
    position: relative;
    background-color: lightblue;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;