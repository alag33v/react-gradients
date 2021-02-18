import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
    color: #eee;
    background-color: #50585E;
  }
`;

export default GlobalStyle;
