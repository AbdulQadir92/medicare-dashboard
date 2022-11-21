import styled from "styled-components";


export const RecentAppointmentsStyled = styled.div`
    position: relative;

    margin-top: 40px;
    width: 100%;
    overflow: auto;

    & > h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 25px;
    }

    & > span {
        position: absolute;
        right: 2px;
        top: -20px;

        width: 250px;
    }

    @media (max-width: 1199px) {
        & > h2 {
            text-align: left;
        }
    }

    @media (max-width: 575px) {
        & > input {
            width: 150px;
        }
    }
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid rgba(150, 150, 150, 0.4);
    background: ${({ theme }) => theme.colors.secBg};
    padding: 5px;
    min-width: 700px;
`

export const Thead = styled.thead`

    tr {
        border-bottom: 1px solid rgba(150, 150, 150, 0.4);
    }

    th {
        padding: 15px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.darkText};

        span {
            padding-left: 7.5px;
            color: ${({ theme }) => theme.colors.darkTextSec};
        }
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

    td:nth-child(7) {
        position: relative;
        width: 3%;

        div {
            position: absolute;
            top: 5px;
            right: 15px;

            display: grid;
            justify-content: center;
            grid-row-gap: 10px;


            svg {
                font-size: 16px;
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