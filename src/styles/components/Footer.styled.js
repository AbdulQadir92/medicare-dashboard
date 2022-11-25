import styled from 'styled-components';


export const FooterStyled = styled.footer`
    position: static;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;
    border-top: 1px solid rgba(0,0,0,0.1);
    background: ${({ theme }) => theme.colors.mainBg};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkTextSec};

    span {
        font-weight: bold;
    }
`