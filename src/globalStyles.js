import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body {
      
      background-image: url(${({ theme }) => theme.bg});
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text}!important ;
      transition: all 0.25s linear;
      
    }
    ul li button {
      color: ${({ theme }) => theme.liItems} ;
    }
    .dropdown-content button {
      color: ${({ theme }) => theme.liItems} ;
    }
    .search-box input,.search-box input::placeholder{
      color: ${({ theme }) => theme.text};
      background: none;
    }
    .search-box {
      background-color: ${({ theme }) => theme.searchBtBg};
    }
    .search-box-btn{
      border-radius: 50%;
      background: ${({ theme }) => theme.searchBtColor};
      transition: .3s;
      border: none  !important;

    }
    `;
