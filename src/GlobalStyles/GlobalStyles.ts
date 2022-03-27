import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
   body {
       background-color: #191b1f;
       -webkit-font-smoothing: antialiased !important;
       display: flex;
       flex-direction: column;
   }
`;

