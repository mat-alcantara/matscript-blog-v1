import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  #__next {
    height: 100%; // or min-height
    width: 100%;
  }

  * {
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
  }

  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
    width: 100%;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500
  }

  button {
    cursor: pointer;
  }
`;
