import styled from "styled-components";


export const TooltipStyled = styled.div`
    position: fixed;
    left: 70px;
    top: ${props => props.top};
    z-index: 10000;

    color: ${({ theme }) => theme.colors.darkText};
    background: ${({ theme }) => theme.colors.secBg};
    padding: 5px 10px;
    box-shadow: ${({ theme }) => theme.sidebar.tooltipShadow};
    border-radius: 5px;
    overflow: visible;
    display: none;

    &.active {
        display: block;
    }
`