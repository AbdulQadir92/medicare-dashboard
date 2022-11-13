import styled from 'styled-components';


export const NavbarTooltipStyled = styled.div`
    position: absolute;
    right: ${props => props.right};
    top: ${props => props.top};
    z-index: 10000;

    color: ${({ theme }) => theme.colors.darkText};
    background: ${({ theme }) => theme.colors.secBg};
    padding: 3px 7px;
    min-width: 80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    display: none;
`