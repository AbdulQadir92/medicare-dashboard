import styled from "styled-components";


export const HomeStyled = styled.div`


    & > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }

    @media (max-width: 991px) {
        & > div {
            grid-template-columns: 1fr;
            width: 80%;
            margin: auto;
        }
    }

    @media (max-width: 575px) {
        & > div {
            width: 100%;
        }
    }
`