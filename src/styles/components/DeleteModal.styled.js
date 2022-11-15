import styled from "styled-components";


export const DeleteModalStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100001;

    /* &::after {
        content: '';
        position: fixed;
        z-index: 10000;

        width: 100vh;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
    } */

    button {
        padding: 0 5px;
        font-size: 14px;
    }
`

export const DarkBg = styled.div`
  
`