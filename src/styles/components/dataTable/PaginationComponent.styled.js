import styled from "styled-components";


export const PaginationStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    button:not(:last-child) {
        margin-right: 10px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div:first-child {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-right: 20px;

        label {
        margin-right: 10px;
        }

        input {
            width: 100px;
        }
    }

    div:last-child {
        select {
            width: 100px;
        }
    }
`

export const PageNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;

    span span {
        font-weight: bold;
    }
`

export const ButtonMain = styled.button`
    padding: 0 20px;
    border: 2px solid ${({ theme }) => theme.colors.mainColor};
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.lightText};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-right: ${props => props.marginRight};
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