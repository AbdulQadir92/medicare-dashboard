import styled from 'styled-components';


export const MessagesStyled = styled.div`
    position: absolute;
    top: 35px;
    right: 0;

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

    & > div:not(:last-child) {
        padding: 10px 0;
    }

    &.active {
        display: block;
    }

    @media (max-width: 575px) {
        right: -115px;
    }
`

export const Message = styled.div`
    padding: 10px;

    img {
        border-radius: 50%;
        border: 1px solid rgba(150, 150, 150, 0.5);
    }

    & > div {
        display: flex;
        align-items: center;
    }
`

export const Body = styled.div`
        display: grid;
        align-items: center;

        padding-left: 10px;

    div {
        display: flex;
        justify-content: space-between;
    }


    p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.darkText};
        margin: 0;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`

export const Name = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.darkText};
    font-weight: bold;
`

export const Time = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkTextSec};
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