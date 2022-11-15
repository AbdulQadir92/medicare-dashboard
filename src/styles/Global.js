import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Source Sans Pro', sans-serif;
    }

    /* :root {
        --font-lg: 17px;
        --font-rg: 16px;
        --font-md: 15px;
        --font-sm: 14px;
    } */


    label {
        margin-bottom: 5px;
    }

    label span {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: 14px;
    }

    input, textarea, select {
        display: block;
        width: 100%;
        border: 1px solid rgba(150, 150, 150, 0.5);
        border-radius: 6px;
        padding: 4px 10px;
    }

    input[type=file] {
       padding: 0;
       height: 34px;
       font-size: 14px;
    }

    ::-webkit-file-upload-button {
        height: 100%;
        padding: 0 10px;
        border: none;
        border-right: 1px solid rgba(150, 150, 150, 0.5);
        font-size: 14px;
    }

    input:focus, textarea:focus {
        border: 1px solid transparent;
        outline: 1px solid ${({ theme }) => theme.colors.mainColor};
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(100, 149, 237, 0.6);
    }
`

export default GlobalStyles