import styled from "styled-components";


export const NotificationsStyled = styled.div`
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 1000;

    width: 250px;
    background: ${({ theme }) => theme.colors.secBg};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: 1px solid rgba(150, 150, 150, 0.2);
    border-radius: 5px;
    display: none;

    h3 {
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
        color: ${({ theme }) => theme.colors.darkText};
    }

    & > div {
        border-top: 1px solid rgba(150, 150, 150, 0.2);
    }

    &.active {
        display: block;
    }

    @media (max-width: 575px) {
        right: -85px;
    }
`

export const Notification = styled.div`
    padding: 15px;

    div:first-child {
        color: ${({ theme }) => theme.colors.darkText};
        font-size: 15px;
    }

    div:last-child {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: 14px;
        text-align: right;
    }
`

export const Bottom = styled.div`
     h3 {
        font-size: 18px;
        text-align: center;
        padding-bottom: 10px;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.darkText};
    }
`