import styled from "styled-components";


export const CancelButton = styled.button`
    padding: 0 10px;
    border: 2px solid #b5b1b1;
    background: #b5b1b1;
    color: ${({ theme }) => theme.colors.formBtnColor};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 15px;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.colors.secBg};
        color: ${({ theme }) => theme.colors.darkText};
    }
`

export const DeleteButton = styled(CancelButton)`
    border: 2px solid #DE3163;
    background: #DE3163;
    margin-left: 10px;
`

export const Button = styled(CancelButton)`
    border: 2px solid ${({ theme }) => theme.colors.mainColor};
    background: ${({ theme }) => theme.colors.mainColor};
    margin-left: 10px;
    padding: 0 17.5px;
`