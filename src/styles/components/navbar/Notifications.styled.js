import styled from "styled-components";


export const NotificationsStyled = styled.div`
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 1000;

    width: 250px;
    background: ${({ theme }) => theme.colors.secBg};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border: 1px solid ${({ theme }) => theme.nav.border};
    border-radius: 5px;
    display: none;

    h3 {
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
        color: ${({ theme }) => theme.colors.darkText};
    }

    & > div {
        border-top: 1px solid ${({ theme }) => theme.nav.border};
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