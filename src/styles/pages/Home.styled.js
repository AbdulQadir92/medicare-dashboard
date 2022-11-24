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


export const Charts = styled.div`
    display: grid;
    justify-content: space-evenly;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    margin-top: 20px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        background: ${({ theme }) => theme.colors.secBg};
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 20px;
        height: 300px;
    }

    @media (max-width: 1199px) {
        grid-template-columns: repeat(1, 1fr);
    }    

    @media (max-width: 575px) {
        & > div {
            padding: 10px;
        }
    }
`

export const BarChartStyled = styled.div`

    div {
        width: 100%;
    }

    @media (max-width: 1199px) {
        height: 190px !important;

        div {
            width: 50%;
        }
    }

    @media (max-width: 991px) {
        height: 280px !important;

        div {
            width: 80%;
        }
    }

    @media (max-width: 767px) {
        height: 300px !important;

        div {
            width: 100%;
        }
    }

    @media (max-width: 575px) {
        height: 220px !important;
    }
`

export const DoughnutChartStyled = styled.div`
   
    & > div {
        display: flex;
    }

    @media (max-width: 1199px) {
        height: 180px !important;
        padding-top: 10px !important;

        & > div {
            width: 50%;
        }
    }

    @media (max-width: 991px) {
        & > div {
            width: 80%;
        }
    }

    @media (max-width: 767px) {
        & > div {
            width: 100%;
        }
    }
`

export const DoughnutContainer = styled.div`
    width: 160px;
    margin-right: 10%;

    @media (max-width: 575px) {
        margin-right: 5%;
    }
`

export const Labels = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: calc(90% - 160px);
`

export const LabelsFlex = styled.div`
     &  > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-size: 12px;
    }

    &  > div:not(:last-child) {
        margin-bottom: 10px;
    }

    span {
        display: block;
    }

    span:nth-child(2) {
        color: rgba(0, 0, 0, 0.75);
    }
`

export const LabelColor = styled.span`
    width: 40px;
    height: 12px;
    margin-right: 7px;
    background: ${props => props.bg};
`