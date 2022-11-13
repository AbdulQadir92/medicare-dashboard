import { NavbarTooltipStyled } from "../../styles/components/navbar/NavbarTooltip.styled";


const NavbarTooltip = ({ name, right, top = "30px" }) => {
    return (
        <NavbarTooltipStyled right={right} top={top}>
            {name}
        </NavbarTooltipStyled>
    )
}

export default NavbarTooltip