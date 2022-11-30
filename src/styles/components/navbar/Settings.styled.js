import styled from "styled-components";


export const SettingsStyled = styled.div`
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 1000;

    width: 250px;
    background: ${({ theme }) => theme.colors.secBg};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border: 1px solid ${({ theme }) => theme.nav.border};
    border-radius: 5px;
    cursor: default;
    color: ${({ theme }) => theme.colors.darkText};
    display: none;

    h3 {
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
    }

    & > div > div {
        border-top: 1px solid ${({ theme }) => theme.nav.border};
        padding: 15px;
    }

    & > div > div > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &.active {
        display: block;
    }

    @media (max-width: 575px) {
        right: -50px;
    }
`

export const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;

    label:not(:last-child) {
        margin-right: 10px;
    }

    label {
        color: ${({ theme }) => theme.colors.darkTextSec};
    }
`

export const CheckBox = styled.label`
    position: relative;

    display: inline-block;
    width: 40px;
    height: 22px;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 34px;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    span::before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 3px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + span {
        background:  ${({ theme }) => theme.colors.mainColor};
    }

    input:focus + span {
        box-shadow: 0 0 1px ${({ theme }) => theme.colors.mainColor};
    }

    input:checked + span::before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
    }
`

export const Colors = styled.div`
    border-top: 1px solid ${({ theme }) => theme.nav.border};

    h3 {
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
    }
`

export const ColorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 1px solid ${({ theme }) => theme.nav.border};
    padding: 20px 15px !important;

    & > div {
       position: relative;

        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: gray;
        cursor: pointer;

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            color: white !important;
            font-size: 14px;
            display: none;
        }

        &:hover {
            svg {
                display: block;
            }
        }
    }

    & > div.active {
        svg {
            display: block;
        }
    }

    & > div:not(:last-child) {
        margin-right: 7px;
    }

    & > div:nth-child(1) {
        background: #6495ED;
    }

    & > div:nth-child(2) {
        background: rgb(3, 201, 215);
    }

    & > div:nth-child(3) {
        background: rgb(115, 82, 255);
    }

    & > div:nth-child(4) {
        background: rgb(255, 92, 142);
    }

    & > div:nth-child(5) {
        background: rgb(30, 77, 183);
    }

    & > div:nth-child(6) {
        background: rgb(251, 150, 120);
    }
`