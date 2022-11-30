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
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;

    margin-top: 20px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        background: ${({ theme }) => theme.colors.secBg};
        border: 1px solid ${({ theme }) => theme.home.border};
        border-radius: 6px;
        padding: 20px;
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
    height: 180px;

    div {
        width: 95%;
    }

    @media (max-width: 575px) {
        div {
            width: 95%;
        }
    }
`

export const DoughnutChartStyled = styled.div`
    padding-top: 10px !important;
    height: 180px;

    & > div {
        display: flex;
    }

    @media (max-width: 1199px) {
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

    @media (max-width: 575px) {
        padding-top: 0 !important;
    }
`

export const DoughnutContainer = styled.div`
    width: 50%;
    margin-right: 10px;
`

export const Labels = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 50%;
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
        color: #635e5e;
        /* color: ${({ theme }) => theme.colors.darkText}; */
    }
`

export const LabelColor = styled.span`
    width: 40px;
    height: 12px;
    margin-right: 7px;
    background: ${props => props.bg};
`