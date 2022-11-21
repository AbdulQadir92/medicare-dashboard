import styled from "styled-components";


export const HomeStyled = styled.div`


    & > div:first-child {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }

    @media (max-width: 991px) {
        & > div:first-child {
            grid-template-columns: 1fr;
            width: 80%;
            margin: auto;
        }
    }

    @media (max-width: 575px) {
        & > div:first-child {
            width: 100%;
        }
    }
`