import styled from "styled-components";


export const ProfileStyled = styled.div`
    position: absolute;
    top: 43px;
    right: 0;

    width: 250px;
    background: ${({ theme }) => theme.colors.secBg};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: 1px solid rgba(150, 150, 150, 0.2);
    border-radius: 5px;
    cursor: default;
    display: none;

    &.active {
        display: block;
    }
`

export const Top = styled.div`
    padding: 10px;
    border-bottom: 1px solid rgba(150, 150, 150, 0.2);

    h3 {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: ${({ theme }) => theme.colors.darkText};
        margin-bottom: 5px;
    }

    div {
        color: ${({ theme }) => theme.colors.darkTextSec};
        font-size: 15px;
        text-align: center;
    }
`

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5px;

    & > div {
        display: flex;
        align-items: center;

        width: 50%;
        cursor: pointer;
    }

    a {
        font-size: 15px;
        margin-left: 10px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.darkText};
    }
`

export const Bottom = styled(Middle)`
    padding: 10px;
    border-top: 1px solid rgba(150, 150, 150, 0.2);

    span {
        font-size: 15px;
        margin-left: 10px;
        color: ${({ theme }) => theme.colors.darkText};
    }
`