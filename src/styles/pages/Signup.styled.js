import styled from "styled-components";


export const SignupStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    font-size: 15px;
    min-height: 100vh;

    & > div {
        width: 400px;
    }

    form > h2 {
        text-align: center;
        font-size: 25px;
    }

    form > p {
        text-align: center;
        color: ${({ theme }) => theme.colors.darkTextSec};
        margin-bottom: 10px;
    }

    form {
        width: 100%;
        border: 1px solid rgba(150, 150, 150, 0.4);
        padding: 20px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.secBg};
        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    }

    form > section > div {
        margin-bottom: 15px;
    }

    form > div {
        text-align: right;
    }
`

export const SignupBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span:first-child {
        color: #EB1D36;
        font-size: 30px;
    }

    span:last-child {
        color: ${({ theme }) => theme.colors.darkText};
        font-size: 25px;
        font-weight: bold;
        margin-left: 7px;
    }
`

export const SignupInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkText};

    & > div:first-child {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        label {
            margin-left: 7px;
            margin-bottom: 0;
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.mainColor};
        }
    }
`

export const SignupButton = styled.div`
    margin-bottom: 25px;

    button {
        width: 100%;
        margin-left: 0;
        padding: 4px 10px;
    }
`

export const SocialLine = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;

    div:nth-child(1), div:nth-child(3) {
        width: calc(50% - 57px);
        height: 2px;
        background: ${({ theme }) => theme.colors.darkText};
    }

    div:nth-child(2) {
        width: 100px;
        margin: 0 7px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: ${({ theme }) => theme.colors.darkTextSec};
    }
`

export const SocialSignup = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;

    button {
        position: relative;

        width: 50%;
        padding: 4px 10px;
        margin-left: 0;
    }

    button:nth-child(1) {
        margin-right: 15px;
        background: #1877f2;
        border-color: #1877f2;
    }

    button:nth-child(2) {
        background: rgb(220, 74, 61);
        border-color: rgb(220, 74, 61);
    }

    button:hover {
        background: ${({ theme }) => theme.colors.mainBg};
    }

    button:nth-child(1):hover span {
        color: #1877f2;
    }

    button:nth-child(2):hover span {
        color: rgb(220, 74, 61);
    }
`

export const SocialIcon = styled.span`
    position: absolute;
    left: 10px;

    font-size: 16px;
`

export const SignupLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: ${({ theme }) => theme.colors.darkTextSec};
        margin-right: 7px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.mainColor};
    }
`