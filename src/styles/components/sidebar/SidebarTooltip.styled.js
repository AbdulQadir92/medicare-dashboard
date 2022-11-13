import styled from "styled-components";


export const TooltipStyled = styled.div`
    position: absolute;
    left: 15px;
    top: ${props => props.top};
    z-index: 10000;

    color: ${({ theme }) => theme.colors.darkText};
    background: ${({ theme }) => theme.colors.secBg};
    padding: 5px 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    display: none;

    &.active {
        display: block;
    }
`