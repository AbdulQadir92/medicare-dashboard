import styled from 'styled-components';


export const NavbarStyled = styled.nav`
    position: relative;

    display: grid;
    grid-template-columns: 3fr 5fr 5fr;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.secBg};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 1199px) {
        grid-template-columns: 2fr 5fr 3fr;
    }

    @media (max-width: 991px) {
        grid-template-columns: 1fr 5fr 3fr;
    }

    @media (max-width: 767px) {
        grid-template-columns: 3fr 3fr 3fr;
    }
`

export const Icon = styled.div`
    & > div {
        width: 30px;
        cursor: pointer;
        padding: 2px 0;
    }

    & > div > div {
        width: 30px;
        height: 3px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.darkText};
    }

    & > div > div:not(:last-child) {
        margin-bottom: 5px;
    }
`

export const Search = styled.div`
    input {
        width: 100%;
        padding: 4px 15px;
        border: none;
        outline: 1px solid rgba(150, 150, 150, 0.5);
        border-radius: 5px;
        transition: 0.3s;
    }

    input:focus {
        border: none;
        outline: 1px solid ${({ theme }) => theme.colors.mainColor};
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(100, 149, 237, 0.6);
    }

    display-none {
        display: none;
    }

    div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 80px;

        font-size: 18px;
        cursor: pointer;
        display: none;
    }

    @media (max-width: 575px) {
        input {
            position: absolute;
            bottom: -80%;
            left: 10%;

            width: 80%;
            display: none;
        }

        input.active {
            display: block;
        }

        div {
            display: block;
            position: absolute;
        }

        div {
            bottom: 0;
            left: 80px;
        }
    }
`

export const NavLinks = styled.div`
    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;
    }

    ul li {
        position: relative;

        margin-left: 25px;
        cursor: pointer;
        color: #D3D3D3;
        font-size: 18px;
    }

    ul li:nth-child(1) span {
        position: absolute;
        top: -5px;
        left: 100%;

        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgb(248, 196, 113);
    } 

    ul li:nth-child(2) span {
        position: absolute;
        top: -4px;
        left: 90%;

        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #0047ab;
    } 

    ul li:last-child img {
        width: 35px;
        height: 35px;
        
        border: 1px solid rgba(155, 155, 155, 0.5);
        border-radius: 50%;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    ul li:last-child span {
        position: absolute;
        bottom: -1px;
        left: 60%;

        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #40E0D0;
        // for offline
        /* background: #ABB0B8; */
    } 

    @media (max-width: 1199px) {
        ul li {
            margin-left: 15px;
        }
    }
`