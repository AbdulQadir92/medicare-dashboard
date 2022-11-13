import { TooltipStyled } from '../../styles/components/sidebar/SidebarTooltip.styled';


const SidebarTooltip = ({ name, top, id }) => {
    return (
        <TooltipStyled top={top} id={id}>
            {name}
        </TooltipStyled>
    )
}

export default SidebarTooltip