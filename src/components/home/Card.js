import { CardStyled } from "../../styles/components/home/Card.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = ({ name, icon, number, color }) => {
    return (
        <CardStyled color={color}>
            <div>
                <h3>{name}</h3>
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
            <h2>{number}</h2>
        </CardStyled>
    )
}

export default Card