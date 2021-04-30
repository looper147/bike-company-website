import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body {
      
      background-image: url(${props => props.bg});
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text}!important ;
      transition: all 0.25s linear;
      
    }
    ul li button {
      color: ${({ theme }) => theme.text} ;
    }
    .search-box input,.search-box input::placeholder{
      color: ${({ theme }) => theme.text};
      background: none;
    }
    .search-box {
      background-color: ${({ theme }) => theme.body}!important;
    }
    `;
