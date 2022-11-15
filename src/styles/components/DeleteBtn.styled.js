import styled from "styled-components";


export const DeleteBtnStyled = styled.button`
    padding: 0 20px;
    border: 2px solid red;
    background: red;
    color: ${({ theme }) => theme.colors.lightText};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-size: 17px;
    margin-right: ${props => props.marginRight};
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.colors.secBg};
        color: ${({ theme }) => theme.colors.darkText};
    }

`