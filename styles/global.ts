import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input, textarea, button {
    outline: none;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%
    }

    @media screen and (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Nunito', sans-serif;
  }

  body {
    background: var(--background);
    -webkitfont-smoothing: antialiased;  
  }
`;
