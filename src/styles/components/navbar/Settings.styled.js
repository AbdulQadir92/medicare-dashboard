import styled from "styled-components";


export const SettingsStyled = styled.div`
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 1000;

    width: 250px;
    background: ${({ theme }) => theme.colors.secBg};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: 1px solid rgba(150, 150, 150, 0.2);
    border-radius: 5px;
    cursor: default;
    display: none;

    h3 {
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
        color: ${({ theme }) => theme.colors.darkText};
    }

    & > div {
        border-top: 1px solid rgba(150, 150, 150, 0.2);
        padding: 15px;
    }

    & > div > div {
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