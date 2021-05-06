import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body {
      
      background-image: url(${({ theme }) => theme.bg});
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text}!important ;
      transition: all 0.25s linear;
      
    }
    
    .search-box input,.search-box input::placeholder{
      color: ${({ theme }) => theme.placeHolderText};
      background: none;
    }
    .search-box {
      background-color: ${({ theme }) => theme.searchBtBg} !important;
    }
    
    .search-box-btn{
      border-radius: 50%;
      background: ${({ theme }) => theme.searchBtColor};
      transition: .3s;
      border: none  !important;
      color: ${({ theme }) => theme.placeHolderText} !important;
    }
    
    .search-box-btn:hover{
      background: ${({ theme }) => theme.searchBtBgHover};
      color: white;
    }
    `;
