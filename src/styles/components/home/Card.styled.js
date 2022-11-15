import styled from "styled-components";


export const CardStyled = styled.div`
    background: ${({ theme }) => theme.colors.secBg};
    /* border: 1px solid ${props => props.color}; */
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 180px;
    padding: 20px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 30px;
            margin: 0;
            color: ${({ theme }) => theme.colors.darkTextSec};
        }

        span {
            font-size: 30px;
            color: ${({ theme }) => theme.colors.mainColor};
        }
    }

    h2 {
        margin: 0;
        margin-top: 10px;
        font-size: 70px;
        text-align: center;
        color: ${props => props.color};
    }

    @media (max-width: 1199px) {
        height: 200px;

        div {
            flex-direction: column;
        }

        h2 {
            margin: 0;
        }
    }


    @media (max-width: 991px) {
        height: 180px;

        div {
            flex-direction: row;
        }

        h2 {
            margin-top: 10px;
        }
    }
`