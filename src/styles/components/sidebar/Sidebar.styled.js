import styled from 'styled-components';


export const SidebarStyled = styled.div`
    & * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    position: fixed;
    z-index: 100001;
    
    width: 220px;

    min-height: 100vh;
    padding-left: 10px;
    background: ${({ theme }) => theme.colors.secBg};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow: hidden;
    transition: 0.3s;

    &.active {
        width: 60px;
    }

    @media (max-width: 765px) {
        width: 60px;

        &.active {
            width: 220px;
        }
    }

    @media (max-width: 575px) {
        width: 0;
        padding-left: 0;

        &.active {
            width: 220px;
            padding-left: 10px;
        }
    }
`

export const SidebarUL = styled.ul`
    width: 100%;
    list-style: none;
`

export const Li = styled.li`
    position: relative;

    width: 100%;
    padding: 5px 15px;
    border-radius: 30px 0 0 30px;

    /* &:not(:first-child):hover::before {
        content: '';
        position: absolute;
        right: 0;
        top: -28px;

        width: 28px;
        height: 28px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 20px 20px 0 10px ${({ theme }) => theme.colors.mainColor};
    }

    &:not(:first-child):hover::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -28px;

        width: 28px;
        height: 28px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 20px -20px 0 10px ${({ theme }) => theme.colors.mainColor};
    } */

    &:not(:first-child),
    &:not(:last-child) {
        margin-bottom: 5px;
    }

    &:not(:first-child):hover, 
    &:not(:first-child).active {
        background: ${({ theme }) => theme.colors.mainColor};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    a {
        display: grid;
        grid-template-columns: 1fr 4fr;
        align-items: center;

        width: 100%;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.mainColor};
    }

    a span:first-child {
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 20px;
        padding-right: 17px;
    }

    &:nth-child(4) a span:first-child, 
    &:nth-child(5) a span:first-child
    {
        padding-right: 22px;
    }

    &:nth-child(6) a span:first-child {
        padding-right: 19px;
    }

    a span:last-child {
        color: ${({ theme }) => theme.colors.darkText};
    }

    &:hover a span, 
    &:not(:first-child).active a span {
        color: ${({ theme }) => theme.colors.lightText};
    }
`

export const BrandLi = styled(Li)`
    padding: 15px 3px;

    a {
        cursor: initial;
    }

    a span {
        display: flex;
        align-items: center;
    }

    a span:first-child {
        color: #EB1D36;
        font-size: 35px;
    }

    a span:last-child {
        color: ${({ theme }) => theme.colors.darkText};
        font-size: 25px;
        font-weight: bold;
    }

    a img {
        width: 30px;
        height: 26px;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.secBg};
    }

    & > span {
        position: absolute;
        top: 0;
        right: 0;

        padding: 5px 10px;
        cursor: pointer;
        font-size: 20px;
        color: #EB1D36;
        display: none;
    }

    @media (max-width: 575px) {
        & > span {
            display: block;
        }
    }
`