import styled from "styled-components";


export const ServicesTableStyled = styled.div`
    width: 100%;
    overflow: auto;

    & > h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 25px;
    }
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid rgba(150, 150, 150, 0.4);
    background: ${({ theme }) => theme.colors.secBg};
    padding: 5px;
    min-width: 700px;

    @media (max-width: 575px) {
        min-width: 500px;
    }
`

export const Thead = styled.thead`

    tr {
        border-bottom: 1px solid rgba(150, 150, 150, 0.4);
    }

    th {
        padding: 15px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.darkText};
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

    td:nth-child(1) {
        width: 11%;
    }

    td:nth-child(2) {
        width: 11%;
    }

    td:nth-child(3) {
        width: 100%;
        font-size: 15.5px;

        display: grid;
        grid-gap: 15px;
    }

    td:nth-child(4) {
        position: relative;
        width: 3%;

        div {
            position: absolute;
            top: 15px;
            right: 15px;

            display: grid;
            justify-content: center;
            grid-row-gap: 15px;

            svg {
                font-size: 18px;
                cursor: pointer;
            }

            svg:nth-child(1) {
                color: ${({ theme }) => theme.colors.mainColor};
            }

            svg:nth-child(2) {
                color: red;
            }
        }
    }
`