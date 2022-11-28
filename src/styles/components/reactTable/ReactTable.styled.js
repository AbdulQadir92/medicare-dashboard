import styled from "styled-components";


export const ReactTableStyled = styled.div`
    position: relative;

    margin-top: 40px;
    width: 100%;
    overflow: auto;
    font-size: 15px;

    & > h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 25px;
    }

    & > span {
        position: absolute;
        right: 2px;
        top: 3px;

        width: 250px;
    }

    @media (max-width: 1199px) {
        & > h2 {
            text-align: left;
        }
    }

    @media (max-width: 767px) {
        & > h2 {
            margin-bottom: 30px;
        }

        & > span {
            position: relative;
            left: 0;       
            top: -15px;
        }
    }

    @media (max-width: 575px) {
        & > input {
            width: 150px;
        }
    }
`

export const Table = styled.table`
    position: relative;

    width: 100%;
    min-width: 800px;
    border: 1px solid rgba(150, 150, 150, 0.4);
    background: ${({ theme }) => theme.colors.secBg};
    padding: 5px;
`

export const Thead = styled.thead`

    tr {
        border-bottom: 1px solid rgba(150, 150, 150, 0.4);
    }

    th {
        padding: 15px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.darkText};

        span {
            padding-left: 7.5px;
            color: ${({ theme }) => theme.colors.darkTextSec};
        }
    }

    tr th:first-child {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        span {
            padding: 0;
        }
    }

    tr th:nth-child(2) {
        display: none;
    }
`

export const Tbody = styled.tbody`
    tr {
        border-bottom: 1px solid rgba(150, 150, 150, 0.4);
    }

    tr:nth-child(odd) {
        background: ${({ theme }) => theme.colors.mainBg};
    }

    td {
        padding: 15px;
    }

    td:first-child {
        width: 5.2%;
    }

    td:nth-child(2) {
        display: none;
    }

    // Doctors Table
    td:nth-child(3) {
        width: ${props => props.pg === 'doctors' ? '120px' : ''}; 
    }

    td:nth-child(5) {
        width: ${props => props.pg === 'doctors' ? '140px' : ''}; 
    }
`

export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    min-width: 700px;
    margin-top: 20px;

    & > div {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-bottom: 20px;
    }

    @media (max-width: 1199px) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`

export const Left = styled.div`
    div {
        display: flex;
        align-items: center;

        margin-right: 15px;
    }

    input, select {
        padding: 2px 5px;
        width: 100px;
    }

    span {
        margin-right: 7px;
    }
`

export const Right = styled.div`
    display: flex;
    align-items: center;

    button:not(:last-child), span {
        margin-right: 10px;
    }
`

export const ButtonMain = styled.button`
    padding: 0 20px;
    border: 2px solid ${({ theme }) => theme.colors.mainColor};
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.lightText};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 14px;
    transition: 0.3s;


    :disabled {
        background: #ebe6e6;
        border: 2px solid #ebe6e6;
        color: ${({ theme }) => theme.colors.darkTextSec};
    }
`

export const ButtonSec = styled(ButtonMain)`
    border: 2px solid #b5b1b1;
    background: #b5b1b1;
`

export const EditIcon = styled.span`
    color: ${({ theme }) => theme.colors.mainColor};
`