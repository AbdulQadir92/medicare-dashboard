import styled from "styled-components";


export const DeleteModalStyled = styled.div`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -60%);

    width: 350px;
`

export const ModalBody = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 17px;
`

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;

    button {
        padding: 5px 20px;
        font-size: 17px;
    }
`