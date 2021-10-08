import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.dark};
  }

  html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  input, text-area, button {
    border: 0;
    font-family: 'Montserrat', sans-serif;
  }
  
  button {
    color: ${({ theme }) => theme.colors.white50};
    font-weight: 700;
    cursor: pointer;
  }

  a, li, ul, ol {
    list-style: none;
    text-decoration: none;
  }

  input, button, img, svg {
    user-select: none;
  }

  .Toastify__toast-container {
    font-size: 1.4rem;
  }
`;