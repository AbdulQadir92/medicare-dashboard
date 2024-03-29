import styled from "styled-components";


export const DoctorsFormStyled = styled.div`
    margin-bottom: 50px;
    font-size: 15px;

    form > h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 25px;
        color: ${({ theme }) => theme.colors.darkText};
    }

    form {
        width: 50%;
        margin: auto;
        border: 1px solid rgba(150, 150, 150, 0.4);
        padding: 30px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.secBg};
    }

    form > section:nth-child(2) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;        
    }

    form > section > div {
        margin-bottom: 15px;
    }

    form > div {
        text-align: right;
    }

    @media (max-width: 1199px) {
        form {
            width: 60%;
        }
    }

    @media (max-width: 991px) {
        form {
            width: 80%;
        }
    }

    @media (max-width: 767px) {
        form {
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        form > section:nth-child(2) {
            grid-template-columns: 1fr;
        }
    }
`

export const NoData = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #DE3163;
`