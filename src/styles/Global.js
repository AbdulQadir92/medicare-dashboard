import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Source Sans Pro', sans-serif;
    }

    label {
        color: ${({ theme }) => theme.colors.darkText};
        margin-bottom: 5px;
    }

    label span {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: 14px;
    }

    input, textarea, select {
        display: block;
        background: ${({ theme }) => theme.colors.secBg};
        color: ${({ theme }) => theme.colors.darkText};
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.borderColor};
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
        background: ${({ theme }) => theme.colors.secBg};
        color: ${({ theme }) => theme.colors.darkText};
        padding: 0 10px;
        border: none;
        border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
        font-size: 14px;
    }

    input:focus, textarea:focus, select:focus {
        border: 1px solid transparent;
        outline: 1px solid ${({ theme }) => theme.colors.mainColor};
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(100, 149, 237, 0.6);
    }

    input[type='checkbox']:focus {
        border: initial;
        outline: initial;
        box-shadow: none;
    }
`

export default GlobalStyles