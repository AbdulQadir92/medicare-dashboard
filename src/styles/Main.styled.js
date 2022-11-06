import styled from "styled-components";


export const MainStyled = styled.div`
    position: absolute;
    left: 220px;

    width: calc(100% - 220px);


    min-height: 100vh;
    background: ${({ theme }) => theme.colors.mainBg};
    transition: 0.3s;

    &.active {
        left: 60px;
        width: calc(100% - 60px);
    }

    @media (max-width: 765px) {
        left: 60px;
        width: calc(100% - 60px);

        &.active {
            left: 220px;
            width: calc(100% - 220px);
        }        
    }

    @media (max-width: 575px) {
        left: 0;
        width: calc(100%);

        &.active {
            left: 0;
            width: 100%;
        }        
    }
`

export const PagesContainer = styled.div`
    padding: 0 20px;
`